const {
  responseServer,
  StatusCodeHTTP,
  StatusCodeDomain
} = require("../shared/utils/http-request");
const {
  PollRepository,
  QuestionRepository
} = require("../core/models/repositories");
const {
  paramsForVerifyBeforeCreate,
  UserType
} = require("../shared/utils/database-sequelize");

const { UploadFileService } = require("../services");

const { addParamsToAllObjects } = require("../shared/utils/arrays");

const { sequelize: sequelizeInstance } = require("../core/database/sequelize");

const { mapperPoll, mapperPolls } = require("../shared/dtos/poll.dto");
const { editPoll } = require("../core/models/repositories/poll.repository");
const entityPoll = "Encuesta";

const getPollById = async (req, res) => {
  try {
    let { pollId: PollId } = req.params;
    let pollFind = mapperPoll(await PollRepository.getPollById(PollId));
    return responseServer(res, pollFind);
  } catch (error) {
    return responseServer(
      res,
      error,
      StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
    );
  }
};

const getAllPollsByUserId = async (req, res) => {
  try {
    let { userId: UserId } = req.params;
    let polls = mapperPolls(await PollRepository.getPollsByUserId(UserId));
    return responseServer(res, polls);
  } catch (error) {
    return responseServer(
      res,
      error,
      StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
    );
  }
};

const getAllPolls = async (req, res) => {
  try {
    let polls = mapperPolls(await PollRepository.getAllPolls());
    //let polls = await PollRepository.getAllPolls();
    return responseServer(res, polls);
  } catch (error) {
    return responseServer(
      res,
      error,
      StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
    );
  }
};
/* const getPollById = async (req, res) => {
  try {
    let { pageNumber = 0, size = 0, entitiesInclude = true } = req.query;
    let employees = await PollRepository.getPollById({ pageNumber, size }, entitiesInclude);
    // mapper dto
    employees.rows = mapperEmployeeForBackOffice(employees.rows);

    return responseServer(res, employees);
  } catch (error) {
    return responseServer(res, error, StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP);
  }
}; */

const uploadAudioPoll = async (req, res) => {
  try {
    let {
      files: { file },
      params: { pollId: PollId }
    } = req;
    let transaction = await sequelizeInstance.transaction(async (t) => {
      let { fileUploaded, route = null } = await UploadFileService.uploadFile(
        file
      );
      if (!fileUploaded) {
        return {
          success: false,
          message:
            "Error al cargar el audio, revisar al configuracion del servidor de archivos estaticos "
        };
      }
      await editPoll({ PollId, AudioEncode: route });
      return { success: true, message: "Audio cargado correctamente" };
    });
    // Upload file
    let { success = false } = transaction;
    if (success) {
      return responseServer(res, transaction);
    }
    return responseServer(res, entityPoll, StatusCodeDomain.TRANSACTION_ERROR);
  } catch (error) {
    return responseServer(
      res,
      error,
      StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
    );
  }
};

const registerPoll = async (req, res) => {
  try {
    let { body: pollBody } = req;

    let transaction = await sequelizeInstance.transaction(async (t) => {
      // Register header Poll
      let { PollId } = await PollRepository.registerPoll(pollBody);

      // Register Questions
      let { Questions } = pollBody;
      Questions = addParamsToAllObjects(Questions, { PollId });

      await QuestionRepository.registerMultiplyQuestion(Questions);

      return { success: true, message: "Encuesta registrado correctamente" };
    });
    let { success = false } = transaction;
    if (success) {
      return responseServer(res, transaction);
    }
    return responseServer(res, entityPoll, StatusCodeDomain.TRANSACTION_ERROR);
  } catch (error) {
    return responseServer(
      res,
      error,
      StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
    );
  }
};

module.exports = {
  registerPoll,
  getPollById,
  getAllPolls,
  getAllPollsByUserId,
  uploadAudioPoll
};
