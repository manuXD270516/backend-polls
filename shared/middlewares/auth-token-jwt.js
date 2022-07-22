// Middleware para controlar la autenticacion
require('dotenv').config();

const jwt = require('jsonwebtoken');

const SCHEMA_AUTHENTICATION_BEARER_HTTP = 'Bearer';

const NR0_MINUTES = 1;
const TIME_VALID_ACCESS_TOKEN = `${60 * NR0_MINUTES}s`;
const TIME_VALID_REFRESH_TOKEN = '20s';

const { UserType } = require('../utils/database-sequelize');

const TOKEN_ERROR_CODE_USER_NOT_ACTIVE = 100;
const TOKEN_ERROR_CODE_NOT_PRIVILEGES = 101;
const TOKEN_ERROR_CODE_USER_NOT_FOUND = 102;
const TOKEN_ERROR_CODE_SERVER = 500;

const { asyncForEach } = require('../utils/arrays');

const { UsersRepository } = require('../../core/models/repositories');
const { responseServer, StatusCodeHTTP } = require('../utils/http-request');

const authorization = {
  verifyTokenAuthorization:
    (...usersType) =>
    async (req, res, next) => {
      //console.table(['userType', userType]);
      const tokenReq = req.headers['authorization'] || req.headers['x-access-token'];
      if (!tokenReq) {
        return res.status(401).send({
          message: 'Unauthorized request, token not exists',
        });
      }
      // Interceptar la cabezera seleccionada para generar el token
      let tokenHeader = req.headers['authorization'] ? 'Authorization' : 'x-access-token';
      // token exists
      let tokenKey;
      let validateTokenReqForBearer = false;
      let validateTokenReqForXAccessToken = false;
      if (req.headers['authorization']) {
        // Bearer Token
        let tokenPart = tokenReq.split(' ');
        validateTokenReqForBearer =
          tokenPart[0] === SCHEMA_AUTHENTICATION_BEARER_HTTP && tokenPart.length == 2;
        tokenKey = tokenPart[1];
      } else {
        // x-access-token
        tokenKey = tokenReq;
        validateTokenReqForXAccessToken = true;
      }
      if (validateTokenReqForBearer || validateTokenReqForXAccessToken) {
        // Bearer ...Token...

        // verificar si fue firmado con alguno de los tipos de credenciales de acceso
        let message = '';
        let tokenError = true;
        await asyncForEach(usersType, async (userType) => {
          if (tokenError) {
            // mientras no se gestione el token
            try {
              let secretKeyForUserType = authorization.getSecretKey(userType);
              let payload = jwt.verify(tokenKey, secretKeyForUserType);
              req.user = payload;
              tokenError = false;
              //next();
            } catch (error) {
              // Invalid Token (datetime expired)

              let responseToken = await authorization.checkToken(tokenKey, userType);
              if (responseToken.tokenStatusOk) {
                let { accessToken } = responseToken;
                res.set('Access-Control-Expose-Headers', tokenHeader);
                res.set(tokenHeader, accessToken);
                tokenError = false;
              } else {
                tokenError = true;
                //console.log(responseToken.tokenStatusError);
                switch (responseToken.tokenStatusError) {
                  case TOKEN_ERROR_CODE_NOT_PRIVILEGES:
                    message =
                      'Acceso Restringido, Usuario activo pero no tiene privilegios de acceso';
                    break;
                  case TOKEN_ERROR_CODE_USER_NOT_ACTIVE:
                    message =
                      'Acceso Restringido, Usuario no se encuentra activo. Comuniquese con soporte tecnico';
                    break;
                  case TOKEN_ERROR_CODE_USER_NOT_FOUND:
                    message = 'Acceso Restringido, Usuario no encontrado en sistema';
                    break;
                }
              }
            }
          }
        });
        if (tokenError) {
          return res.status(401).send({
            message,
          });
        } else {
          next();
        }
      } else {
        // Token Malformed
        return res.status(401).send({
          message: 'Unauthorized, Token Malformed',
        });
      }
    },
  // asignar el tipo de usuario al payload
  generateTokenKey: (payloadUser, userType) => {
    //console.log(payloadUser);
    let { UserId, Username } = payloadUser;

    let payload = {
      User: {
        UserId,
        Username,
      },
      UserType: userType,
    };
    //console.log(payload);

    let accessTokenExpiredIn = {
      expiresIn: TIME_VALID_ACCESS_TOKEN,
    };

    let refreshTokenExpiredIn = {
      expiresIn: TIME_VALID_REFRESH_TOKEN,
    };
    const secretKey = authorization.getSecretKey(userType);
    //console.table(['secretKeyGenerate', secretKey]);

    let accessToken = jwt.sign(payload, secretKey, accessTokenExpiredIn);
    //let refreshToken = jwt.sign(payload, process.env.SECRET_KEY_ACCESS_TOKEN, refreshTokenExpiredIn);

    return accessToken;
  },
  checkToken: async (tokenKey, userType) => {
    try {
      //console.log('Decoded Token');
      const secretKey = authorization.getSecretKey(userType);
      let decodePayload = await jwt.decode(tokenKey, secretKey);
      //console.log(decodePayload);
      if (decodePayload && decodePayload.User) {
        let {
          User: { UserId },
          UserType: userTypeForToken,
        } = decodePayload;
        let userFind = await UsersRepository.getUserWithActiveRoles(UserId);
        if (userType == userTypeForToken) {
          if (userFind) {
            let refreshToken = authorization.generateTokenKey(userFind, userTypeForToken);
            return {
              tokenStatusOk: true,
              refreshToken,
            };
          } else {
            return {
              tokenStatusError: TOKEN_ERROR_CODE_USER_NOT_ACTIVE,
            };
          }
        }
        return {
          tokenStatusError: TOKEN_ERROR_CODE_NOT_PRIVILEGES,
        };
      }
      return {
        tokenStatusError: TOKEN_ERROR_CODE_USER_NOT_FOUND,
      };
    } catch (error) {
      //console.log(error);
      return {
        tokenStatusError: TOKEN_ERROR_CODE_SERVER,
      };
    }
  },
  getSecretKey: (userType) => {
    let resultKey;
    switch (parseInt(userType)) {
      case UserType.USER_POLLESTER:
        resultKey = process.env.SECRET_KEY_ACCESS_TOKEN_POLLSTER;
        break;
      case UserType.USER_SUPERVISOR:
        resultKey = process.env.SECRET_KEY_ACCESS_TOKEN_SUPERVISOR;
        break;
      default:
        break;
    }
    return resultKey;
  },
};

module.exports = authorization;
