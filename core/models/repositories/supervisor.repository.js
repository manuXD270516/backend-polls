const { Op } = require('sequelize');
const {
  paramsDeleted,
  paramsUpdated,
  finalQuery,
  parameterizePagination,
} = require('../../../shared/utils/database-sequelize');

const { sequelize } = require('../../database/sequelize');

const Supervisor = require('../Supervisor');

/**
 * Listado de encuestas
 * @param {*} paginateParams
 */
const getAllSupervisors = async () => {
  let supervisors = await Supervisor.findAll();
  return supervisors;
};

const registerSupervisor = async (supervisorFields) => {
  return await Supervisor.create(supervisorFields);
};
const supervisorExists = async (fields) => {
  return await Supervisor.findOne({
    where: {
      [Op.or]: fields,
    },
  });
};

module.exports = {
  getAllSupervisors,
  registerSupervisor,
  supervisorExists
};
