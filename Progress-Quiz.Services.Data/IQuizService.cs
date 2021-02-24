using System.Collections.Generic;

namespace Progress_Quiz.Services.Data
{
    public interface IQuizService
    {
        IEnumerable<T> GetAll<T>();
    }
}