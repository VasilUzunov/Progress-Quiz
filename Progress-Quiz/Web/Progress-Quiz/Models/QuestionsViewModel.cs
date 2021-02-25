using System.Collections.Generic;

namespace Progress_Quiz.Models
{
    public class QuestionsViewModel
    {
        public IEnumerable<AllQuestionsByCategory> Questions { get; private set; }

        public QuestionsViewModel(IEnumerable<AllQuestionsByCategory> questions)
        {
            Questions = questions;
        }
    }
}