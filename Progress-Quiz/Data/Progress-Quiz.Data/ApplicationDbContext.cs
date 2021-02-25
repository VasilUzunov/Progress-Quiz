using Microsoft.EntityFrameworkCore;
using Progress_Quiz.Data.Models;

namespace Progress_Quiz.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Question> Questions { get; set; }

        public DbSet<CorrectAnswer> CorrectAnswers { get; set; }

        public DbSet<WrongAnswer> WrongAnswers { get; set; }
    }
}