/**
 * @author manuel saavedra
 * @email saavedramanuel100@gmail.com
 * @create date 2020-07-15 20:37:16
 * @modify date 2020-07-15 20:37:16
 * @desc [description]
 */

const bcrypt = require("bcrypt");

// Repositories
const {
  UsersRepository,
  UsersSessionRepository,
  SupervisorRepository,
  PollsterRepository
} = require("../core/models/repositories");

// Midlewares
const jwtAuthorization = require("../shared/middlewares/auth-token-jwt");

// Utils
const {
  responseServer,
  StatusCodeDomain,
  StatusCodeHTTP
} = require("../shared/utils/http-request");
const { generateStringRandom } = require("../shared/utils/strings");
const {
  paramsForVerifyBeforeCreate
} = require("../shared/utils/database-sequelize");

const { UserType } = require("../shared/utils/database-sequelize");

// Instancia Sequelize (Por ver la implementacion final)
const { sequelize: sequelizeInstance } = require("../core/database/sequelize");
const { mapperUserColaboratorForSession } = require("../shared/dtos/user.dto");
const {
  sendRecoverPasswordMailTo
} = require("../core/services/mailer.service");

const entityUserName = "Usuario";
const PICTURE_PROFILE_DOCUMENT_ID = 9;

// Business Logic
const authenticateUser = async (req, res) => {
  try {
    let statusCodeHttp = StatusCodeHTTP.OK_HTTP;
    let { Email, Password } = req.body;
    let { userType } = req.params;
    var authenticateResponse;
    let userFind = await UsersRepository.getUserByUsernameAndType(
      Email,
      userType
    );
    if (userFind) {
      let { Password: passwordHash, UserId } = userFind;
      let mathchPassword = await bcrypt.compare(Password, passwordHash);
      if (mathchPassword) {
        // generar token y autenticar al usuario
        let userWithRoles = await UsersRepository.getUserWithActiveRoles(
          UserId
        );

        let authToken = jwtAuthorization.generateTokenKey(
          userWithRoles,
          userType
        );

        let tokenSession = generateStringRandom();
        await UsersSessionRepository.initSession(tokenSession, UserId);

        authenticateResponse = {
          authorization: true,
          userWithRoles,
          authToken,
          tokenSession
        };

        authenticateResponse = { auth: true, UserId };
        switch (parseInt(userType)) {
          case UserType.USER_POLLESTER:
            let pollsterFind = await PollsterRepository.pollsterExists({
              Email
            });
            authenticateResponse = {
              ...authenticateResponse,
              data: pollsterFind
            };
            break;
          case UserType.USER_SUPERVISOR:
            let supervisorFind = await SupervisorRepository.supervisorExists({
              Email
            });
            authenticateResponse = {
              ...authenticateResponse,
              data: supervisorFind
            };

          default:
            break;
        }
      } else {
        authenticateResponse = {
          auth: false,
          message:
            "Email incorrecto o No tiene los privilegios para ingresar con el Tipo de Usuario ingresado"
        };
        //statusCodeHttp = StatusCodeHTTP.;
      }
    } else {
      authenticateResponse = {
        auth: false,
        message: "Usuario no encontrado en sistema"
      };
    }
    return responseServer(res, authenticateResponse, statusCodeHttp);
  } catch (error) {
    return responseServer(
      res,
      error,
      StatusCodeHTTP.INTERNAL_SERVER_ERROR_HTTP
    );
  }
};

const logoutUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let { userType = false, tokenSession } = req.query;

    const response = await sequelizeInstance.transaction(async (t) => {
      let closeSession = await UsersSessionRepository.closeSession(
        tokenSession,
        userId
      );

      let logoutSucess = await UsersRepository.logoutUser(userId);
      return closeSession && logoutSucess;
    });

    if (response) {
      return responseServer(res, { content: "Cierre de sesion correcto" });
    } else {
      return responseServer(
        res,
        entityUserName,
        StatusCodeDomain.RESOURCE_UPDATED_FAILURE
      );
    }
  } catch (error) {
    return responseServer(res, error, StatusCodeDomain.TRANSACTION_ERROR);
  }
};

module.exports = {
  authenticateUser,
  logoutUser
};
