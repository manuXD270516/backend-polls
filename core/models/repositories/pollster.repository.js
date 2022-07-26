const { Op } = require("sequelize");
const {
  paramsDeleted,
  paramsUpdated,
  finalQuery,
  parameterizePagination
} = require("../../../shared/utils/database-sequelize");

const { sequelize } = require("../../database/sequelize");

const Pollster = require("../Pollster");
const Poll = require("../Poll");
const Users = require("../Users");
const Question = require("../Question");

/**
 * Listado de encuestadores
 * @param {*} paginateParams
 */
const getAllPollsters = async () => {
  let pollsters = await Pollster.findAll({
    include: [
      {
        model: Users,
        include: [
          {
            model: Poll,
            required: false
          }
        ]
      }
    ]
  });
  return pollsters;
};

const registerPollster = async (pollsterFields) => {
  return await Pollster.create(pollsterFields);
};

/**
 * Verifica la existencia del Encuestador
 * @param {*} fields
 */
const pollsterExists = async (fields) => {
  return await Pollster.findOne({
    where: {
      [Op.or]: fields
    }
  });
};

const editPollster = async ({ PollsterId, ...pollsterFields }) => {
  pollsterFields = { ...pollsterFields, ...paramsUpdated() };
  let updated = await Pollster.update(pollsterFields, {
    where: { PollsterId }
  });
  return updated[0];
};

const getPollsterById = async (PollsterId) => {
  return await Pollster.findByPk(PollsterId, {
    include: [
      {
        model: Users,
        include: [
          {
            model: Poll,
            separate: true,
            include: [
              {
                model: Question,
                separate: true
              }
            ]
          }
        ]
      }
    ]
  });
};

module.exports = {
  getAllPollsters,
  registerPollster,
  pollsterExists,
  getPollsterById,
  editPollster
};
