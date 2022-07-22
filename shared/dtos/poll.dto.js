const { morphism } = require('morphism');
const { mapperQuestion } = require('./question.dto');
const { mapperUser } = require('./user.dto');

const mapperPoll = (poll) => {
  const pollSchema = {
    PollId: 'PollId',
    Fullname: 'Fullname',
    Datebirth: 'Datebirth',
    Address: 'Address',
    AudioEncode: 'AudioEncode',
    Questions: 'Questions',
  };

  let pollDto = morphism(pollSchema, poll);
  pollDto.Questions = mapperQuestion(pollDto.Questions);

  return pollDto;
};
const mapperPolls = (poll) => {
  const pollSchema = {
    PollId: 'PollId',
    Fullname: 'Fullname',
    Datebirth: 'Datebirth',
    Address: 'Address',
    AudioEncode: 'AudioEncode',
    User: 'User',
    Questions: 'Questions',
  };

  const pollsDto = morphism(pollSchema, poll);

  pollsDto.forEach((poll,i) => {
    pollsDto[i].Questions = mapperQuestion(poll.Questions);
    pollsDto[i].User = mapperUser(poll.User);
  })

  return pollsDto;
};

module.exports = {
  mapperPoll,
  mapperPolls,
};
