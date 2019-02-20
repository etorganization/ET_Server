using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ETModel
{
    /// <summary>
    /// 请求方法
    /// </summary>
    public static class HttpRequestMethod
    {
        public const string GET = "GET";
        public const string POST = "POST";
    }

    /// <summary>
    /// HTTP请求辅助类
    /// </summary>
    public static class HttpRequestHelper
    {
        /// <summary>
        /// 发送HTTP Get同步请求
        /// </summary>
        /// <param name="url"></param>
        /// <returns>响应报文的字符串</returns>
        public static string SendGetRequest(string url)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest httpWebRequest = CreateGetHttpWebRequest(url);
                HttpWebResponse httpWebResponse = httpWebRequest.GetResponse() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(httpWebResponse, HttpRequestMethod.GET);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return respStr;
        }

        /// <summary>
        /// 发送HTTP Get同步请求
        /// </summary>
        /// <param name="url"></param>
        /// <typeparam name="TResult">响应JSON字符串转成的对象的类型</typeparam>
        /// <returns>响应JSON字符串转成的对象</returns>
        public static TResult SendGetRequest<TResult>(string url)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest httpWebRequest = CreateGetHttpWebRequest(url);
                HttpWebResponse httpWebResponse = httpWebRequest.GetResponse() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(httpWebResponse, HttpRequestMethod.GET);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return JsonHelper.FromJson<TResult>(respStr);
        }

        /// <summary>
        /// 发送HTTP Get异步请求
        /// </summary>
        /// <param name="url"></param>
        /// <typeparam name="TResult">响应JSON字符串转成的对象的类型</typeparam>
        /// <returns>响应JSON字符串转成的对象</returns>
        public static async Task<TResult> SendGetRequestAsync<TResult>(string url)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest httpWebRequest = CreateGetHttpWebRequest(url);
                HttpWebResponse httpWebResponse = await httpWebRequest.GetResponseAsync() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(httpWebResponse, HttpRequestMethod.GET);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return JsonHelper.FromJson<TResult>(respStr);
        }

        /// <summary>
        /// 发送Http Post同步请求
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postJsonData">post请求的参数(JSON字符串)</param>
        /// <returns></returns>
        public static string SendPostRequest(string url, string postJsonData)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest postRequest = CreatePostHttpWebRequest(url, postJsonData);
                HttpWebResponse postResponse = postRequest.GetResponse() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(postResponse, HttpRequestMethod.POST);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return respStr;
        }

        /// <summary>
        /// 发送Http Post同步请求
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postJsonData">post请求的参数(JSON字符串)</param>
        /// <returns>响应的JSON字符串转成的对象</returns>
        public static TResult SendPostRequest<TResult>(string url, string postJsonData)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest postRequest = CreatePostHttpWebRequest(url, postJsonData);
                HttpWebResponse postResponse = postRequest.GetResponse() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(postResponse, HttpRequestMethod.POST);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return JsonHelper.FromJson<TResult>(respStr);
        }

        /// <summary>
        /// 发送Http Post异步请求
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postData">post请求的参数(JSON字符串)</param>
        /// <returns>响应的JSON字符串</returns>
        public static async Task<string> SendPostRequestAsync(string url, string postData)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest postRequest = CreatePostHttpWebRequest(url, postData);
                HttpWebResponse postResponse = await postRequest.GetResponseAsync() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(postResponse, HttpRequestMethod.POST);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return respStr;
        }

        /// <summary>
        /// 发送Http Post异步请求
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postData">post请求的参数(JSON字符串)</param>
        /// <returns>响应的JSON字符串转成的对象</returns>
        public static async Task<TResult> SendPostRequestAsync<TResult>(string url, string postData)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest postRequest = CreatePostHttpWebRequest(url, postData);
                HttpWebResponse postResponse = await postRequest.GetResponseAsync() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(postResponse, HttpRequestMethod.POST);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return JsonHelper.FromJson<TResult>(respStr);
        }

        /// <summary>
        /// 发送Http Post异步请求
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postData">post请求的参数</param>
        /// <returns>响应的JSON字符串转成的对象</returns>
        public static async Task<TResult> SendPostRequestAsync<TResult>(string url, object postData)
        {
            string respStr = string.Empty;
            try
            {
                HttpWebRequest postRequest = CreatePostHttpWebRequest(url, JsonHelper.ToJson(postData));
                HttpWebResponse postResponse = await postRequest.GetResponseAsync() as HttpWebResponse;
                respStr = ConvertHttpResponseToStr(postResponse, HttpRequestMethod.POST);
            }
            catch (Exception ex)
            {
                respStr = ex.Message;
                Log.Error(ex.Message);
            }

            return JsonHelper.FromJson<TResult>(respStr);
        }

        /// <summary>
        /// 创建HTTP Get请求
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        private static HttpWebRequest CreateGetHttpWebRequest(string url)
        {
            HttpWebRequest httpWebRequest = HttpWebRequest.Create(url) as HttpWebRequest;
            httpWebRequest.Method = HttpRequestMethod.GET;
            httpWebRequest.Timeout = 5000;
            httpWebRequest.ContentType = "text/html;charset=UTF-8";
            httpWebRequest.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            return httpWebRequest;
        }

        /// <summary>
        /// 创建Http Post请求
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postData"></param>
        /// <returns></returns>
        public static HttpWebRequest CreatePostHttpWebRequest(string url, string postData)
        {
            var postRequest = HttpWebRequest.Create(url) as HttpWebRequest;
            postRequest.KeepAlive = false;
            postRequest.Timeout = 5000;
            postRequest.Method = HttpRequestMethod.POST;
            // postRequest.ContentType = "application/x-www-form-urlencoded";   // TODO: 这要改
            postRequest.ContentType = "application/json";
            postRequest.ContentLength = postData.Length;
            postRequest.AllowWriteStreamBuffering = false;
            StreamWriter writer = new StreamWriter(postRequest.GetRequestStream(), Encoding.ASCII);
            writer.Write(postData);
            writer.Flush();
            return postRequest;
        }

        /// <summary>
        /// HttpResponse转Json字符串
        /// </summary>
        /// <param name="response"></param>
        /// <param name="requestType"></param>
        /// <returns></returns>
        private static string ConvertHttpResponseToStr(HttpWebResponse response, string requestType)
        {
            string responseResult = "";
            string encoding = "UTF-8";
            if (string.Equals(requestType, HttpRequestMethod.POST, StringComparison.OrdinalIgnoreCase))
            {
                encoding = response.ContentEncoding;
                if (encoding == null || encoding.Length < 1)
                {
                    encoding = "UTF-8";
                }
            }

            using (StreamReader reader = new StreamReader(response.GetResponseStream(), Encoding.GetEncoding(encoding)))
            {
                responseResult = reader.ReadToEnd();
            }

            return responseResult;
        }
    }
}