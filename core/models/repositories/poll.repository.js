const { Op } = require("sequelize");
const {
  paramsDeleted,
  paramsUpdated,
  finalQuery,
  parameterizePagination
} = require("../../../shared/utils/database-sequelize");

const { sequelize } = require("../../database/sequelize");

const Poll = require("../Poll");
const Question = require("../Question");
const Users = require("../Users");

/**
 * Listado de encuestas
 * @param {*} paginateParams
 */
const getAllPolls = async () => {
  let polls = await Poll.findAll({
    include: [
      {
        model: Users
      },

      {
        model: Question,
        separate: true
      }
    ]
  });
  return polls;
};

const editPoll = async ({ PollId, ...pollFields }) => {
  pollFields = { ...pollFields, ...paramsUpdated() };
  let updated = await Poll.update(pollFields, {
    where: { PollId }
  });
  return updated[0];
};

const getPollsByUserId = async (UserId) => {
  let polls = await Poll.findAll({
    where: {
      UserId
    },
    include: [
      {
        model: Question,
        separate: true
      }
    ]
  });
  return polls;
};

const getPollById = async (PollId) => {
  let poll = await Poll.findByPk(PollId, {
    include: [
      {
        model: Question,
        separate: true
      }
    ]
  });
  return poll;
};

const registerPoll = async (pollFields) => {
  return await Poll.create(pollFields);
};

/**
 * Verifica la existencia del Encuestador
 * @param {*} fields
 */
const pollExists = async (fields) => {
  return await Poll.findOne({
    where: {
      [Op.or]: fields
    }
  });
};

/*

const editEmployee = async ({ EmployeeId, ...employeeFields }) => {
  employeeFields = { ...employeeFields, ...paramsUpdated() };
  //console.log(employeeFields);
  let updated = await Employee.update(employeeFields, {
    where: { EmployeeId },
  });
  return updated[0];
};
*/

module.exports = {
  getAllPolls,
  registerPoll,
  pollExists,
  getPollById,
  getPollsByUserId,
  editPoll
};
