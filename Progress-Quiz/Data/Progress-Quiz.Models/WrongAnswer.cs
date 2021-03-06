﻿using System.ComponentModel.DataAnnotations;

namespace Progress_Quiz.Data.Models
{
    public class WrongAnswer
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Answer { get; set; }

        public int QuestionId { get; set; }

        public virtual Question Question { get; set; }
    }
}