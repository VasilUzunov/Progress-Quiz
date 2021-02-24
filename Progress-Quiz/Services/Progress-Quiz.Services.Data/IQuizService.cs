using System.Collections.Generic;

namespace Progress_Quiz.Services.Data
{
    public interface IQuizService
    {
        ICollection<AllQuestionsByCategory> GetAllHistoryQuestions();
        ICollection<AllQuestionsByCategory> GetAllSportQuestions();
        ICollection<AllQuestionsByCategory> GetAllAnimalsQuestions();
        ICollection<AllQuestionsByCategory> GetAllMathQuestions();
        ICollection<AllQuestionsByCategory> GetAllTechnologyQuestions();
    }
}