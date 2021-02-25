using System;
using System.Linq;
using AutoMapper;
using Progress_Quiz.Data.Models;
using Progress_Quiz.Models;

namespace Progress_Quiz.Mapping
{
    public class QuestionsProfile : Profile
    {
        public QuestionsProfile()
        {
            this.CreateMap<Question, AllQuestionsByCategory>()
                .ForMember(x => x.WrongAnswers, y => y.MapFrom(x => x.WrongAnswers.ToList()))
                .ForMember(x => x.CorrectAnswer, y => y.MapFrom(x => x.Answer.Answer));
        }
    }
}