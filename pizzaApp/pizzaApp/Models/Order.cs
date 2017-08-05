using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pizzaApp.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public DateTime Date  { get; set; }
        public int Qty { get; set; }
    }
}