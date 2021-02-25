using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Progress_Quiz.Data.Models
{
    public class Question
    {
        public Question()
        {
            this.WrongAnswers = new HashSet<WrongAnswer>();
        }

        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Category { get; set; }

        [Required]
        [MaxLength(1000)]
        public string QuestionText { get; set; }

        public virtual CorrectAnswer Answer { get; set; }

        public virtual ICollection<WrongAnswer> WrongAnswers { get; set; }
    }
}