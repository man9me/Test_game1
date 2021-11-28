using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Test_game1.Engine.Attac;
using Test_game1.Engine.Collision;

namespace Test_game1.Models
{
    public class UnitAttacks
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public  (Unit,Unit) units { get; set; }
        public int dmg { get; set; }
        public double distance { get; set; }
        public bool effective { get; set; }
        public  (Unit,Unit) result { get; set; }
        
        public UnitAttacks(Unit Ua, Unit Ud)
        {
            this.units = (Ua, Ud);
            this.distance = Collisions.maths.distance(Ua, Ud);
            this.effective = Collisions.AttacCollision(Ua, Ud);
            Console.WriteLine(this.effective);
            Console.WriteLine(this.distance);
            Console.WriteLine(Ua.Name);
            if (this.effective)
            {
                (this.units,this.dmg,this.effective) = Attacks.Attack(Ua, Ud, this.distance);
                Console.WriteLine(this.dmg);
            }
            else
            {
                this.result = this.units;
            }
            
        }
    }
}