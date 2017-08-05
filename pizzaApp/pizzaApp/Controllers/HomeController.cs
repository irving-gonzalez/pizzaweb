using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using pizzaApp.Models;
using System.IO;
using System.Web.Script.Serialization;

namespace pizzaApp.Controllers
{
    public class HomeController : Controller
    {
      //  PizzaContext db = new PizzaContext();


     

        // GET: Home
        public ViewResult Index()
        {
           
            return View();
        }

/*
       [HttpPost]
        public string Index2(Class1 c)
        {


            Stream req = Request.InputStream;
            req.Seek(0, System.IO.SeekOrigin.Begin);
            string json = new StreamReader(req).ReadToEnd();

     
             
            return c.ID+" inside index2";
        }
        */

    }
}