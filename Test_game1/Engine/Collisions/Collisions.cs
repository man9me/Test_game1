using System;
using Test_game1.Models;

namespace Test_game1.Engine.Collision
{
    public class Collisions
    {
       static public bool AttacCollision(Unit Ua, Unit Ud)
        {
            var d=maths.distance(Ua, Ud);
            Console.WriteLine(Ua.AttackDistance);
            Console.WriteLine(d);
            if (Convert.ToDouble(Ua.AttackDistance) >= d)
            {
                return true;
            }
            else return false;
        }
        
        public class maths
        {
            public static double distance(Unit Ua, Unit Ud)
            {
                var a = Math.Pow((Math.Pow(Ud.x - Ua.x, 2)+Math.Pow(Ud.y - Ua.y, 2)),0.5);
                if (a <= 1)
                {
                    a = 1.0;
                }
                return a;
            }
        }
    }
}