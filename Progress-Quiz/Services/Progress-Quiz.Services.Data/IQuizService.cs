using System.Collections.Generic;
using Progress_Quiz.Models;

namespace Progress_Quiz.Services.Data
{
    public interface IQuizService
    {
        ICollection<AllQuestionsByCategory> GetAllQuestions();
    }
}