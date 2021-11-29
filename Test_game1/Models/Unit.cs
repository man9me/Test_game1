using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Options;

namespace Test_game1.Models
{
    public class Unit
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRequired] 
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int hp { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int mana { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        [BsonDefaultValue(0)] 
        public int x { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        [BsonDefaultValue(0)] 
        public int y { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int MaxMana { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int MaxHp { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int armor { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int MagResist { get; set; }
        [BsonRequired] 
        [Required]
        [Range(0, 999)]
        public int attack { get; set; }
        
        //поменять на енум всетаки
        public enum ClassesEnum
        {
            Warrior,
            Mage,
            Archer,
        }
        
       [BsonRequired] 
       [Required]
       [RegularExpression(@"(?:^|\W)Warrior(?:$|\W)|(?:^|\W)Mage(?:$|\W)|(?:^|\W)Archer(?:$|\W)")]
       //enum
       public string Class { get; set; }

       [BsonRequired] [Required] public int AttackDistance { get; set; } = 1;

       /*static public Validator(Unit unit)
       {
           
       }*/
    }
}