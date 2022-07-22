const Question = require('../Question');

const {
  UserType,
  paramsUpdated,
  upsert,
  bulkRefresh,
} = require('../../../shared/utils/database-sequelize');

const registerMultiplyQuestion = async (questions) => {
  return await Question.bulkCreate(questions);
};

module.exports = {
  registerMultiplyQuestion,
};
