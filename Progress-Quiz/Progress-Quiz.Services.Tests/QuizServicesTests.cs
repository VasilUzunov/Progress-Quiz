using System;
using System.Threading.Tasks;
using AutoMapper;
using Progress_Quiz.Services.Data;
using Xunit;

namespace Progress_Quiz.Services.Tests
{
    public class QuizServiceTests
    {
        private readonly IServiceProvider serviceProvider;
        private readonly IMapper mapper;
        private readonly IQuizService quizService;
        
        [Fact]
        public async Task GetAllQuestionsShouldWorkAsExpected()
        {
        }
    }
}
