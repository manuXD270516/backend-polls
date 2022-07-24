function manageEndpoints(io) {
  const {
    responseServer,
    StatusCodeHTTP,
    StatusCodeDomain
  } = require("../shared/utils/http-request");
  const {
    SupervisorRepository,
    UsersRepository
  } = require("../core/models/repositories");
  const {
    paramsForVerifyBeforeCreate
  } = require("../shared/utils/database-sequelize");

  const entitySupervisor = "Supervisor";

  const {
    sequelize: sequelizeInstance
  } = require("../core/database/sequelize");
  const { addParamsToAllObjects } = require("../shared/utils/arrays");

  const { mapperSupervisor } = require("../shared/dtos/supervisor.dto");

  const getAllSupervisors = async (req, res) => {
    try {
      let supervisors = mapperSupervisor(
        await SupervisorRepository.getAllSupervisors()
      );
      return responseServer(res, supervisors);
    } catch (error) {
      return responseServer(
        res,
        error,
        StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
      );
    }
  };

  const registerSupervisor = async (req, res) => {
    try {
      let { body: supervisorBody } = req;
      let { User } = supervisorBody;
      delete supervisorBody.User;

      let transaction = await sequelizeInstance.transaction(async (t) => {
        // Register Header Employee
        let { SupervisorId } = await SupervisorRepository.registerSupervisor(
          supervisorBody
        );

        // Register User
        await UsersRepository.registerUser({ ...User, SupervisorId });

        return {
          success: true,
          message: "Supervisor registrado correctamente"
        };
      });
      let { success = false } = transaction;
      if (success) {
        return responseServer(res, transaction);
      }
      return responseServer(
        res,
        entitySupervisor,
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

  return { getAllSupervisors, registerSupervisor };
}
module.exports = manageEndpoints;
/* module.exports = {
  getAllSupervisors,
  registerSupervisor
};
 */
