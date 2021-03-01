using System;
using System.Collections.Generic;
using Progress_Quiz.Data.Models;
using Progress_Quiz.Models;

namespace Progress_Quiz.Models
{
    public class GetAllQuestions
    {
        public int Id { get; set; }

        public string Category { get; set; }

        public string QuestionText { get; set; }

        public string CorrectAnswer { get; set; }

        public List<WrongAnswer> WrongAnswers { get; set; }
    }
}
