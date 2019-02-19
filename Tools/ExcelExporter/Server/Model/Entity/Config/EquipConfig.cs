namespace ETModel
{
	public partial class EquipConfigCategory : ACategory<EquipConfig>
	{
	}

	public class EquipConfig: IConfig
	{
		public int Id { get; set; }
		public string Name;
		public int ProfessionLimit;
		public int Position;
		public string PropertyMin;
		public string PropertyMax;
		public int Pool;
		public int SecondNumMin;
		public int SecondNumMax;
		public int SkillId;
		public int IfClear;
	}
}
