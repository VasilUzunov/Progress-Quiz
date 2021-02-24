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

        public ICollection<AllQuestionsByCategory> GetAllHistoryQuestions()
        {
            var history = this.context.Questions.Where(x => x.Category == "History")
                .ProjectTo<AllQuestionsByCategory>(this.mapper.ConfigurationProvider)
                .ToList();

            return history;
        }

        public ICollection<AllQuestionsByCategory> GetAllSportQuestions()
        {
            var sport = this.context.Questions.Where(x => x.Category == "Sport")
                .ProjectTo<AllQuestionsByCategory>(this.mapper.ConfigurationProvider)
                .ToList();

            return sport;
        }

        public ICollection<AllQuestionsByCategory> GetAllAnimalsQuestions()
        {
            var animals = this.context.Questions.Where(x => x.Category == "Animals")
                .ProjectTo<AllQuestionsByCategory>(this.mapper.ConfigurationProvider)
                .ToList();

            return animals;
        }

        public ICollection<AllQuestionsByCategory> GetAllMathQuestions()
        {
            var math = this.context.Questions.Where(x => x.Category == "Math")
                .ProjectTo<AllQuestionsByCategory>(this.mapper.ConfigurationProvider)
                .ToList();

            return math;
        }

        public ICollection<AllQuestionsByCategory> GetAllTechnologyQuestions()
        {
            var technology = this.context.Questions.Where(x => x.Category == "Technology")
                .ProjectTo<AllQuestionsByCategory>(this.mapper.ConfigurationProvider)
                .ToList();

            return technology;
        }
    }
}