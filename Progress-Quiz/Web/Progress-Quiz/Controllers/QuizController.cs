using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Progress_Quiz.Services.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Progress_Quiz.Models;

namespace Progress_Quiz.Controllers
{
    public class QuizController : Controller
    {
        private readonly IQuizService quizService;
        private readonly IMapper mapper;

        public QuizController(IQuizService quizService, IMapper mapper)
        {
            this.quizService = quizService;
            this.mapper = mapper;
        }

        public IActionResult Quiz()
        {
            var questions = quizService.GetAllQuestions();
            return View(new QuestionsViewModel(questions));
        }
    }
}
