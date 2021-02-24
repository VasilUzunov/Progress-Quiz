using System.ComponentModel.DataAnnotations;

namespace Progress_Quiz.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Category { get; set; }

        [Required]
        [MaxLength(1000)]
        public string QuestionText { get; set; }

        public virtual Answer Answer { get; set; }
    }
}