using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Test_game1.Engine.Attac;
using Test_game1.Models;
using Test_game1.Services;

namespace Test_game1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitsController : ControllerBase
    {

        private readonly UnitService _unitService;
        private readonly AttacksService _attacksService;

        public UnitsController(UnitService unitService)
        {
            _unitService = unitService;
            //_unitService.Populate();
            var a=_unitService.Get();

        }
        
 
    [HttpGet]
    public ActionResult<List<Unit>> Get()
    {
    var a=_unitService.Get();
    
    Console.WriteLine(a[0].Description);
        return a;
    }
    
    [HttpGet("{id:length(24)}", Name = "GetUnit")]
        public ActionResult<Unit> Get(string id)
        {
            var unit = _unitService.Get(id);
    
            if (unit == null)
            {
                return NotFound();
            }

            return unit;
        }

        [HttpPost]
        public ActionResult<Unit> Create(Unit unit)
        {   
            Console.WriteLine("post");
            Console.WriteLine(unit);
            _unitService.Create(unit);

            return CreatedAtRoute("GetUnit", new {id = unit.Id.ToString()}, unit);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Unit unitIn)
        {
            Console.WriteLine("put");
            Console.WriteLine(unitIn);
            var unit = _unitService.Get(id);

            if (unit == null)
            {
                return NotFound();
            }

            _unitService.Update(id, unitIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var unit = _unitService.Get(id);

            if (unit == null)
            {
                return NotFound();
            }

            _unitService.Remove(unit.Id);

            return NoContent();
        }
        
        /*[HttpPost("attack/{id1:length(24)}/{id2:length(24)}")]
        public ActionResult<UnitAttacks> Get(string id1,string id2)
        {
            Console.WriteLine(id1);
            var Ua = _unitService.Get(id1);
            var Ud = _unitService.Get(id2);
            if (Ua == null||Ud == null)
            {
                return NotFound();
            }
            else
            {
                Console.WriteLine(Ua);
                var attack=new UnitAttacks(Ua, Ud);
                
                //_attacksService.Create(attack);
                _unitService.Update(id1, attack.units.Item1);
                _unitService.Update(id2, attack.units.Item2);
                return attack;
            }
        }*/
    }
}