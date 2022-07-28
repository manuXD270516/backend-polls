function manageEndpointsPollster(io) {
  const { randomCirclePoint } = require("random-location");
  const {
    responseServer,
    StatusCodeHTTP,
    StatusCodeDomain
  } = require("../shared/utils/http-request");
  const {
    PollsterRepository,
    UsersRepository
  } = require("../core/models/repositories");
  const {
    paramsForVerifyBeforeCreate
  } = require("../shared/utils/database-sequelize");

  const entityPollster = "Encuestador";

  const {
    sequelize: sequelizeInstance
  } = require("../core/database/sequelize");
  const { addParamsToAllObjects } = require("../shared/utils/arrays");

  const {
    mapperPollster,
    mapperPollsters
  } = require("../shared/dtos/pollster.dto");

  const getAllPollsters = async (req, res) => {
    try {
      let pollsters = mapperPollsters(
        await PollsterRepository.getAllPollsters()
      );
      //server.io.emit("topicTest", { value: pollsters });
      return responseServer(res, pollsters);
    } catch (error) {
      return responseServer(
        res,
        error,
        StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
      );
    }
  };

  const registerPollster = async (req, res) => {
    try {
      let { body: pollsterBody } = req;
      let { User } = pollsterBody;
      delete pollsterBody.User;

      let transaction = await sequelizeInstance.transaction(async (t) => {
        // Register Header Employee
        let { PollsterId } = await PollsterRepository.registerPollster(
          pollsterBody
        );

        // Register User
        await UsersRepository.registerUser({ ...User, PollsterId });
      });
      let { success = false } = transaction;
      if (success) {
        return responseServer(res, transaction);
      }
      return responseServer(
        res,
        entityPollster,
        StatusCodeDomain.TRANSACTION_ERROR
      );
    } catch (error) {
      return responseServer(
        res,
        error,
        StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
      );
    }
  };

  const generateRandomLocation = (req, res) => {
    const P = {
      latitude: -17.737857,
      longitude: -63.126789
    };

    const R = 5000; // meters

    let arr = [];
    for (let i = 0; i < 20; i++) {
      (function (index) {
        setTimeout(function () {
          let { latitude: newLatitude, longitude: newLongitude } =
            randomCirclePoint(P, R);
          newLatitude =
            Math.round((newLatitude + Number.EPSILON) * 10000) / 10000;
          newLongitude =
            Math.round((newLongitude + Number.EPSILON) * 10000) / 10000;
          arr.push({ newLatitude, newLongitude });
          console.log({ newLatitude, newLongitude });
          io.emit("topicLocation", { newLatitude, newLongitude });
        }, i * 2000);
      })(i);

      //arr.push(randomCirclePoint(P, R));
    }
    //const randomPoint = randomCirclePoint(P, R);
    return responseServer(res, arr);
  };
  const refreshLocation = async (req, res) => {
    try {
      let { pollsterId: PollsterId } = req.params;
      let { Latitude, Longitude } = req.query;

      let transaction = await sequelizeInstance.transaction(async (t) => {
        // Register Header Employee
        let pollsterFields = { Latitude, Longitude };

        await PollsterRepository.editPollster({
          PollsterId,
          ...pollsterFields
        });

        let { Latitude: newLatitude, Longitude: newLongitude } =
          await PollsterRepository.getPollsterById(PollsterId);

        // socket io implementation

        return {
          socketData: { newLatitude, newLongitude },
          success: true,
          message: "Ubicacion del encuestador actualizda correctamente"
        };
      });
      let { success = false } = transaction;
      if (success) {
        let { socketData } = transaction;
        delete transaction.socketData;
        console.log(socketData);
        io.emit("topicLocation", socketData);
        return responseServer(res, transaction);
      }
      return responseServer(
        res,
        entityPollster,
        StatusCodeDomain.TRANSACTION_ERROR
      );
    } catch (error) {
      return responseServer(
        res,
        error,
        StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
      );
    }
  };

  const getPollsterBy2Id = async (req, res) => {
    try {
      let { pollsterId: PollsterId } = req.params;
      /* let pollFind = mapperPollster(
        await PollsterRepository.getPollsterById(PollsterId)
      ); */
      let pollFind = await PollsterRepository.getPollsterById(PollsterId);
      console.log(pollFind);
      return responseServer(res, pollFind);
    } catch (error) {
      return responseServer(
        res,
        error,
        StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
      );
    }
  };

  const getPollsterById = async (req, res) => {
    try {
      let { pollsterId: PollsterId } = req.params;
      let pollFind = mapperPollster(
        await PollsterRepository.getPollsterById(PollsterId)
      );
      /* let pollFind = await PollsterRepository.getPollsterById(PollsterId); */
      return responseServer(res, pollFind);
    } catch (error) {
      return responseServer(
        res,
        error,
        StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
      );
    }
  };

  return {
    getAllPollsters,
    registerPollster,
    getPollsterById,
    getPollsterBy2Id,
    refreshLocation,
    generateRandomLocation
  };
}
module.exports = manageEndpointsPollster;
