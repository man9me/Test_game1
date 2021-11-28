namespace Test_game1.Models
{
    public class UnitsDbSettings : IUnitsDbSettings
    {
        public string UnitsCollectionName { get; set; }
        public string AttacksCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        
    }

    public interface IUnitsDbSettings
    {
        string UnitsCollectionName { get; set; }
         string AttacksCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}