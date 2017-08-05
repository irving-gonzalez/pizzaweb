using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pizzaApp.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Phone { get; set; }
        public DateTime Date  { get; set; }
        public int number { get; set; }

    }
}