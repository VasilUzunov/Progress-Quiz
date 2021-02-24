using System;
using System.Collections.Generic;
using Progress_Quiz.Models;

public class AllQuestionsByCategory
{
    public int Id { get; set; }

    public string Category { get; set; }

    public string QuestionText { get; set; }

    public string CorrectAnswer { get; set; }

    public List<WrongAnswer> WrongAnswers { get; set; }
}
