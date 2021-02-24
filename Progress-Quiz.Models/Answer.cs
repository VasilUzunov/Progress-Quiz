using System.ComponentModel.DataAnnotations;

namespace Progress_Quiz.Models
{
    public class Answer
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(1)]
        public string CorrectAnswer { get; set; }

        public int QuestionId { get; set; }

        public virtual Question Question { get; set; }
    }
}