const {
  responseServer,
  StatusCodeHTTP,
  StatusCodeDomain,
} = require('../shared/utils/http-request');
const { PollsterRepository, UsersRepository } = require('../core/models/repositories');
const { paramsForVerifyBeforeCreate } = require('../shared/utils/database-sequelize');

const entityPollster = 'Encuestador';

const { sequelize: sequelizeInstance } = require('../core/database/sequelize');
const { addParamsToAllObjects } = require('../shared/utils/arrays');

const { mapperPollster, mapperPollsters } = require('../shared/dtos/pollster.dto');

const getAllPollsters = async (req, res) => {
  try {
    let pollsters = mapperPollsters(await PollsterRepository.getAllPollsters());
    return responseServer(res, pollsters);
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
};

const registerPollster = async (req, res) => {
  try {
    let { body: pollsterBody } = req;
    let { User } = pollsterBody;
    delete pollsterBody.User;

    let transaction = await sequelizeInstance.transaction(async (t) => {
      // Register Header Employee
      let { PollsterId } = await PollsterRepository.registerPollster(pollsterBody);

      // Register User
      await UsersRepository.registerUser({ ...User, PollsterId });

      return { success: true, message: 'Encuestador registrado correctamente' };
    });
    let { success = false } = transaction;
    if (success) {
      return responseServer(res, transaction);
    }
    return responseServer(res, entityPollster, StatusCodeDomain.TRANSACTION_ERROR);
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
};

const refreshLocation = async (req, res) => {
  try {
    let { pollsterId: PollsterId } = req.params;
    let { Latitude, Longitude } = req.query;

    let transaction = await sequelizeInstance.transaction(async (t) => {
      // Register Header Employee

      let pollsterFields = { Latitude, Longitude };

      await PollsterRepository.editPollster({ PollsterId, ...pollsterFields });

      // socket io implementation

      return { success: true, message: 'Ubicacion del encuestador actualizda correctamente' };
    });
    let { success = false } = transaction;
    if (success) {
      return responseServer(res, transaction);
    }
    return responseServer(res, entityPollster, StatusCodeDomain.TRANSACTION_ERROR);
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
};

const getPollsterById = async (req, res) => {
  try {
    let { pollsterId: PollsterId } = req.params;
    let pollFind = mapperPollster(await PollsterRepository.getPollsterById(PollsterId));
    return responseServer(res, pollFind);
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
};
module.exports = {
  getAllPollsters,
  registerPollster,
  getPollsterById,
  refreshLocation,
};
