using System;
using System.Collections.Generic;
using Test_game1.Models;

namespace Test_game1.Engine.Attac
{
    public class AttackPair
    {
        public  (Unit,Unit) units { get; set; }
        public double distance { get; set; }
        public bool effective { get; set; }
        public int damage { get; set; }

        public AttackPair(Unit Ua, Unit Ud, double distance)
        {
            this.units = (Ua, Ud);
            this.distance = distance;
        }
       
    }
    public class Attacks
    {
        
       static public ((Unit,Unit),int,bool) Attack(Unit Ua, Unit Ud, double distance)
       {
           var attackPair = new AttackPair(Ua, Ud, distance);
           
           Action s = Ua.Class switch
           {
               "Warrior" => (Action) (() => {attackPair=AttackWarrior(attackPair); }),
               "Mage" => (Action) (() => {attackPair=AttackMage(attackPair); }),
               "Archer" => (Action) (() => { attackPair=AttackArcher(attackPair);}),
               _ => (Action)( () => { }),
           };
            s.Invoke();
            return ((attackPair.units), attackPair.damage, attackPair.effective);
       }

       private static AttackPair AttackArcher(AttackPair attackPair)
       {
           var baseDmg = attackPair.units.Item1.attack;
           var coef = attackPair.distance / attackPair.units.Item1.AttackDistance;
           var dmg = (baseDmg * (1 + coef));
           var armor = attackPair.units.Item2.armor;
           var damage = dmg - armor;

           if (damage < 1)
           {
               attackPair.effective = false;
               attackPair.damage = 0;
           }
           else
           {
               attackPair.effective = true;
               attackPair.damage = Convert.ToInt32(damage);
               attackPair.units.Item2.hp = attackPair.units.Item2.hp - attackPair.damage;

           }
           return attackPair;
       }

       private static AttackPair AttackMage(AttackPair attackPair)
       {
           var mana = attackPair.units.Item1.mana;
           var baseDmg = attackPair.units.Item1.attack;
           var coef = mana>=2?2:0.5;
           var dmg = (baseDmg * coef);
           var armor = attackPair.units.Item2.MagResist;
           var damage = dmg - armor;
           if (damage < 1)
           {
               attackPair.effective = false;
               attackPair.damage = 0;
           }
           else
           {
               attackPair.effective = true;
               attackPair.damage = Convert.ToInt32(damage);
               attackPair.units.Item2.hp = attackPair.units.Item2.hp - attackPair.damage;
               
           }

           attackPair.units.Item1.mana = mana >= 2 ? Convert.ToInt32(Math.Floor((mana*0.5))): mana;
           return attackPair;
       }

       private static AttackPair AttackWarrior(AttackPair attackPair)
       {
           var mHelth = attackPair.units.Item1.MaxHp;
           var helth = attackPair.units.Item1.hp;
           var baseDmg = attackPair.units.Item1.attack;
           var Coef = (mHelth!=helth)?((mHelth-helth)/mHelth)*baseDmg:0;
           var dmg = (baseDmg +  Coef);
           var armor = attackPair.units.Item2.armor;
           var damage = dmg - armor;

           if (damage < 1)
           {
               attackPair.effective = false;
               attackPair.damage = 0;
           }
           else
           {
               attackPair.effective = true;
               attackPair.damage = Convert.ToInt32(damage);
               attackPair.units.Item2.hp = attackPair.units.Item2.hp - attackPair.damage;
               
           }
           return attackPair;
       }


    }
}