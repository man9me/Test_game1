using MongoDB.Driver;
using Test_game1.Engine.Attac;
using Test_game1.Models;

namespace Test_game1.Services
{
    public class AttacksService
    {
        private readonly IMongoCollection<UnitAttacks> _attacks;

        public AttacksService(IUnitsDbSettings settings)
        {
            /*var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            
            _attacks = database.GetCollection<UnitAttacks>(settings.AttacksCollectionName);*/
            var settingss = MongoClientSettings.FromConnectionString(settings.ConnectionString);
            var client = new MongoClient(settingss);
            _attacks = client.GetDatabase(settings.DatabaseName).GetCollection<UnitAttacks>(settings.AttacksCollectionName);

        }
        
        
        public UnitAttacks Create(UnitAttacks attack)
        {
            _attacks.InsertOne(attack);
            return attack;
        }
    }
}