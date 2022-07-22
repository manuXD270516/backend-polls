const { morphism } = require('morphism');
const { mapperPoll } = require('./poll.dto');
const { mapperUser } = require('./user.dto');

const mapperPollster = (pollster) => {
  const pollsterSchema = {
    PollsterId: 'PollsterId',
    CI: 'CI',
    Names: 'Names',
    Lastnames: 'Lastnames',
    Email: 'Email',
    Phone: 'Phone',
    Gender: 'Gender',
    Address: 'Address',
    Latitude: 'Latitude',
    Longitude: 'Longitude',
    CreatedIn: 'CreatedIn',
    User: 'User',
    Polls: 'User.Polls',
  };

  const pollsterDto = morphism(pollsterSchema, pollster);

  pollsterDto.User = mapperUser(pollsterDto.User);
  pollsterDto.Polls = mapperPoll(pollsterDto.Polls);

  return pollsterDto;
};

const mapperPollsters = (pollster) => {
  const pollsterSchema = {
    PollsterId: 'PollsterId',
    CI: 'CI',
    Names: 'Names',
    Lastnames: 'Lastnames',
    Email: 'Email',
    Phone: 'Phone',
    Gender: 'Gender',
    Address: 'Address',
    Latitude: 'Latitude',
    Longitude: 'Longitude',
    CreatedIn: 'CreatedIn',
    User: 'User',
    Polls: 'User.Polls',
  };

  const pollstersDto = morphism(pollsterSchema, pollster);

  pollstersDto.forEach((pollster,i) => {
    pollstersDto[i].User = mapperUser(pollster.User);
    pollstersDto[i].Polls = mapperPoll(pollster.Polls);

  })


  return pollstersDto;
};

module.exports = {
  mapperPollster,
  mapperPollsters
};
