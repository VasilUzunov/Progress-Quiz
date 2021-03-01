using Microsoft.AspNetCore.Mvc;
using Progress_Quiz.Services.Data;
using Progress_Quiz.Models;

namespace Progress_Quiz.Controllers
{
    public class QuizController : Controller
    {
        private readonly IQuizService quizService;

        public QuizController(IQuizService quizService)
        {
            this.quizService = quizService;
        }

        public IActionResult Quiz()
        {
            var questions = quizService.GetAllQuestions();
            return View(new QuestionsViewModel(questions));
        }
    }
}
