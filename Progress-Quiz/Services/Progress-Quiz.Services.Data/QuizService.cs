using AutoMapper;
using Progress_Quiz.Data;
using System.Collections.Generic;
using System.Linq;
using AutoMapper.QueryableExtensions;
using Progress_Quiz.Models;

namespace Progress_Quiz.Services.Data
{
    public class QuizService : IQuizService
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public QuizService(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public ICollection<AllQuestionsByCategory> GetAllQuestions()
        {
            var questions = this.context.Questions
                .ProjectTo<AllQuestionsByCategory>(this.mapper.ConfigurationProvider)
                .ToList();

            return questions;
        }
    }
}