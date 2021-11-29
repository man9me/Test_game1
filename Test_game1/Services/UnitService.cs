using System;
using System.Collections.Generic;
using MongoDB.Driver;
using Test_game1.Models;

namespace Test_game1.Services
{
    public class UnitService
    {
        private readonly IMongoCollection<Unit> _units;

        public UnitService(IUnitsDbSettings settings)
        {
            
                var settingss = MongoClientSettings.FromConnectionString(settings.ConnectionString);
                var client = new MongoClient(settingss);
                _units = client.GetDatabase(settings.DatabaseName).GetCollection<Unit>(settings.UnitsCollectionName);
                this.Populate();
        }

        public List<Unit> Get() =>
            _units.Find(unit => true).ToList();

        public Unit Get(string id) =>
            _units.Find<Unit>(unit => unit.Id == id).FirstOrDefault();

        public Unit Create(Unit unit)
        {
            _units.InsertOne(unit);
            return unit;
        }

        public void Update(string id, Unit unitIn) =>
            _units.ReplaceOne(unit => unit.Id == id, unitIn);

        public void Remove(Unit unitIn) =>
            _units.DeleteOne(unit => unit.Id == unitIn.Id);

        public void Remove(string id) =>
            _units.DeleteOne(unit => unit.Id == id);
        
        public void Populate()
        {
            List<Unit> Units = new List<Unit>();
            var u1 = new Unit();
            u1.armor = 10;
            u1.hp = 100;
            u1.mana = 100;
            u1.x = 1;
            u1.y = 2;
            u1.attack = 15;
            u1.Class = "Mage";
            u1.Description = "Moses do his thing";
            u1.Name = "Moses";
            u1.MagResist = 10;
            u1.MaxHp = 100;
            u1.MaxMana = 100;
            u1.AttackDistance = 10;
            var u2 = new Unit();
            u2.armor = 10;
            u2.hp = 100;
            u2.mana = 100;
            u2.x = 1;
            u2.y = 2;
            u2.attack = 25;
            u2.Class = "Warrior";
            u2.Description = "It dosent count if u have fun";
            u2.Name = "hanson";
            u2.MagResist = 2;
            u2.MaxHp = 200;
            u2.MaxMana = 50;
            
            var u3 = new Unit();
            u3.armor = 2;
            u3.hp = 150;
            u3.mana = 40;
            u3.x = 5;
            u3.y = 8;
            u3.attack = 25;
            u3.Class = "Archer";
            u3.Description = "Moses do his thing";
            u3.Name = "ark";
            u3.MagResist = 10;
            u3.MaxHp = 170;
            u3.MaxMana = 100;
            u3.AttackDistance = 15;
            
            Units.Add(u3);
            Units.Add(u2);
            Units.Add(u1);
            _units.InsertManyAsync(Units);
            
        }
    }
}