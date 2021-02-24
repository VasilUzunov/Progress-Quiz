using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Progress_Quiz.Controllers
{
    public class QuizController : Controller
    {
        public IActionResult Quiz()
        {
            return View();
        }
    }
}
