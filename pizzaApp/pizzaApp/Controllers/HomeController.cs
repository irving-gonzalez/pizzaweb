using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using pizzaApp.Models;

namespace pizzaApp.Controllers
{
    public class HomeController : Controller
    {
        PizzaContext db = new PizzaContext();


        Order o = new Order
        {
            Name = "irving"
        };

        // GET: Home
        public ViewResult Index()
        {
            

            return View();
        }


       
        public string Index2()
        {
            // string name =Request.Form["firstName"];
            return "inside index2";
        }


    }
}