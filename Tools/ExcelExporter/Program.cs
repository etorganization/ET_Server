using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using MongoDB.Bson;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace ETTools
{
    public struct CellInfo
    {
        public string Type;
        public string Name;
        public string Desc;
        public string DefaultValue;
    }

    public class ExcelMD5Info
    {
        public Dictionary<string, string> fileMD5 = new Dictionary<string, string>();

        public string Get(string fileName)
        {
            string md5 = "";
            this.fileMD5.TryGetValue(fileName, out md5);
            return md5;
        }

        public void Add(string fileName, string md5)
        {
            this.fileMD5[fileName] = md5;
        }
    }

    internal class Program
    {
        private const string ExcelPath = "../Excel";
        private const string ServerConfigPath = "../Config/";

        private static bool isClient;

        private static ExcelMD5Info md5Info;

        public static void Main(string[] args)
        {
            try
            {
               
               // 导出服务端配置
                
                isClient = false;
			
                ExportAll(ServerConfigPath);
			
                ExportAllClass(@"../Server/Model/Entity/Config", "namespace ETModel\n{\n");
			
                Console.WriteLine($"导出服务端配置完成!");
                
            }
            catch (Exception e)
            {
                Console.WriteLine($"{e}");
            }
        }

        
        private static void ExportAllClass(string exportDir, string csHead)
        {
            foreach (string filePath in Directory.GetFiles(ExcelPath))
            {
                if (Path.GetExtension(filePath) != ".xlsx")
                {
                    continue;
                }

                if (Path.GetFileName(filePath).StartsWith("~"))
                {
                    continue;
                }

                ExportClass(filePath, exportDir, csHead);
                Console.WriteLine($"生成{Path.GetFileName(filePath)}类");
            }

        }

        private static void ExportClass(string fileName, string exportDir, string csHead)
        {
            XSSFWorkbook xssfWorkbook;
            using (FileStream file = new FileStream(fileName, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
            {
                xssfWorkbook = new XSSFWorkbook(file);
            }

            string protoName = Path.GetFileNameWithoutExtension(fileName);

            string exportPath = Path.Combine(exportDir, $"{protoName}.cs");
            using (FileStream txt = new FileStream(exportPath, FileMode.Create))
            using (StreamWriter sw = new StreamWriter(txt))
            {
                StringBuilder sb = new StringBuilder();
                ISheet sheet = xssfWorkbook.GetSheetAt(0);
                sb.Append(csHead);

                //sb.Append($"\t[Config({GetCellString(sheet, 0, 0)})]\n");
                sb.Append($"\tpublic partial class {protoName}Category : ACategory<{protoName}>\n");
                sb.Append("\t{\n");
                sb.Append("\t}\n\n");

                sb.Append($"\tpublic class {protoName}: IConfig\n");
                sb.Append("\t{\n");
                sb.Append("\t\tpublic int Id { get; set; }\n");

                int cellCount = sheet.GetRow(0).LastCellNum;

                for (int i = 1; i < cellCount; i++)
                {
                    string fieldDesc = GetCellString(sheet, 2, i);
                    string fieldName = GetCellString(sheet, 0, i);

                    if (fieldName == "Id" || fieldName == "_id")
                    {
                        continue;
                    }

                    string fieldType = GetCellString(sheet, 1, i);
                    if (fieldType == "" || fieldName == "")
                    {
                        continue;
                    }

                    sb.Append($"\t\tpublic {ConvertType(fieldType)} {fieldName};\n");
                }

                sb.Append("\t}\n");
                sb.Append("}\n");

                sw.Write(sb.ToString());
            }
        }

        private static void ExportAll(string exportDir)
        {
            string md5File = Path.Combine(ExcelPath, "md5.txt");
            if (!File.Exists(md5File))
            {
                md5Info = new ExcelMD5Info();
            }
            else
            {
                md5Info = MongoHelper.FromJson<ExcelMD5Info>(File.ReadAllText(md5File));
            }

            foreach (string filePath in Directory.GetFiles(ExcelPath))
            {
                if (Path.GetExtension(filePath) != ".xlsx")
                {
                    continue;
                }

                if (Path.GetFileName(filePath).StartsWith("~"))
                {
                    continue;
                }

                string fileName = Path.GetFileName(filePath);
                string oldMD5 = md5Info.Get(fileName);
                string md5 = MD5Helper.FileMD5(filePath);
                md5Info.Add(fileName, md5);
                if (md5 == oldMD5)
                {
                    continue;
                }

                Export(filePath, exportDir);
            }

            File.WriteAllText(md5File, md5Info.ToJson());

            Console.WriteLine("所有表导表完成");
            
        }

        private static void Export(string fileName, string exportDir)
        {
            XSSFWorkbook xssfWorkbook;
            using (FileStream file = new FileStream(fileName, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
            {
                xssfWorkbook = new XSSFWorkbook(file);
            }

            string protoName = Path.GetFileNameWithoutExtension(fileName);
            Console.WriteLine($"{protoName}导表开始");
            string exportPath = Path.Combine(exportDir, $"{protoName}.txt");
            using (FileStream txt = new FileStream(exportPath, FileMode.Create))
            using (StreamWriter sw = new StreamWriter(txt))
            {
                for (int i = 0; i < xssfWorkbook.NumberOfSheets; ++i)
                {
                    ISheet sheet = xssfWorkbook.GetSheetAt(i);
                    if (sheet.SheetName.Equals(protoName))
                    {
                        ExportSheet(sheet, sw);
                    }
                    
                }
            }

            Console.WriteLine($"{protoName}导表完成");
        }

        private static void ExportSheet(ISheet sheet, StreamWriter sw)
        {
            //行，列 从0开始
            int cellCount = sheet.GetRow(0).LastCellNum;

            CellInfo[] cellInfos = new CellInfo[cellCount];

            for (int i = 1; i < cellCount; i++)
            {
                string fieldName = GetCellString(sheet, 0, i);
                string fieldType = GetCellString(sheet, 1, i);
                string fieldDesc = GetCellString(sheet, 3, i);
                string defaultValue = GetCellString(sheet, 4, i);
                
                cellInfos[i] = new CellInfo() { Name = fieldName, Type = fieldType, Desc = fieldDesc, DefaultValue = defaultValue};
            }

            for (int i = 7; i <= sheet.LastRowNum; ++i)
            {
                //id 为空
                if (GetCellString(sheet, i, 1) == "")
                {
                    continue;
                }

                StringBuilder sb = new StringBuilder();
                sb.Append("{");
                IRow row = sheet.GetRow(i);
                for (int j = 1; j < cellCount; ++j)
                {
                    string desc = cellInfos[j].Desc.ToLower();
                    if (desc.StartsWith("#"))
                    {
                        continue;
                    }


                    if (j > 1)
                    {
                        sb.Append(",");
                    }

                    string fieldName = cellInfos[j].Name;
                    string fieldValue = GetCellString(sheet, i, j);

                    string fieldType = cellInfos[j].Type;
                    string defaultValue = cellInfos[j].DefaultValue;
                    
                    if (fieldValue == null || fieldValue.Equals(""))
                    {
                        sb.Append($"\"{fieldName}\":{Convert(fieldType, defaultValue)}");
                    }
                    else
                    {
                        sb.Append($"\"{fieldName}\":{Convert(fieldType, fieldValue)}");
                    }
                    
                    
                }

                sb.Append("}");
                sw.WriteLine(sb.ToString());
            }
        }

        private static string ConvertType(string type)
        {
            switch (type)
            {
                case "int":
                case "int32":
                case "int64":
                case "long":
                case "float":
                case "double":
                case "string":
                    return type;
                default:
                    return "string";
            }
        }
        
        private static string Convert(string type, string value)
        {
            switch (type)
            {
                case "int[]":
                case "int32[]":
                case "long[]":
                    return $"[{value}]";
                case "string[]":
                    return $"[{value}]";
                case "int":
                case "int32":
                case "int64":
                case "long":
                case "float":
                case "double":
                    return value;
                case "string":
                    if (value == null || value.Equals("null"))
                    {
                        return null;
                    }
                    else
                    {
                        return $"\"{value}\"";
                    }
                    
                default:
                    if (value == null || value.Equals("null"))
                    {
                        return null;
                    }
                    else
                    {
                        return $"\"{value}\"";
                    }
            }
        }

        private static string GetCellString(ISheet sheet, int i, int j)
        {
            return sheet.GetRow(i)?.GetCell(j)?.ToString() ?? "";
        }

        private static string GetCellString(IRow row, int i)
        {
            return row?.GetCell(i)?.ToString() ?? "";
        }

        private static string GetCellString(ICell cell)
        {
            return cell?.ToString() ?? "";
        }
    }
}