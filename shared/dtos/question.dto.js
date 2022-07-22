const { morphism } = require('morphism');


const mapperQuestion = (question) => {
   const questionSchema = {
     QuestionId: 'QuestionId',
     QuestionName: 'QuestionName',
     Answer: 'Answer',
   };

   //console.log(questions[0].QuestionOfferedAnswers);
   let questionDto = morphism(questionSchema, question);
   return questionDto;
}




module.exports = {
  mapperQuestion
};
