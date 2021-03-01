using System.Collections.Generic;

namespace Progress_Quiz.Models
{
    public class QuestionsViewModel
    {
        public IEnumerable<GetAllQuestions> Questions { get; set; }

        public QuestionsViewModel(IEnumerable<GetAllQuestions> questions)
        {
            Questions = questions;
        }
    }
}