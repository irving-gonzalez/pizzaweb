using pizzaApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace pizzaApp.Controllers
{
    public class ApiController : Controller
    {
        //context for database
        PizzaContext db = new PizzaContext();

        // GET: Api/
        public ActionResult Index()
        {
            return View();
        }

        // POST: Api/
        [HttpPost]
        public string Index(Order order)
        {
            db.Orders.Add(order);
            db.SaveChanges();
            return order.FirstName +"from api ";
        }

    }
}