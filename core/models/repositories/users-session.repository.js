const UsersSession = require('../UsersSession');
const { paramsDeleted, paramsUpdated } = require('../../../shared/utils/database-sequelize');
const { Op } = require('sequelize');
const Users = require('../Users');

const SESSION_ACTIVE = 1;
const SESSION_INACTIVE = 0;

const orderDesc = 'DESC',
  paramCreatedIn = 'CreatedIn',
  paramUsersSessionId = 'UsersSessionId',
  orderByUserSessionDesc = [
    [paramUsersSessionId, orderDesc],
    [paramCreatedIn, orderDesc],
  ];

const initSession = async (TokenSession, UsersId) => {
  let fields = { TokenSession, UsersId, SessionActive: SESSION_ACTIVE };
  console.log(fields);
  return await UsersSession.create(fields);
};

const closeSession = async (TokenSession, UsersId) => {
  let sessionCloseFields = { ...paramsUpdated(), SessionActive: SESSION_INACTIVE };
  let logoutSuccess = await UsersSession.update(sessionCloseFields, {
    where: { UsersId, TokenSession: { [Op.like]: TokenSession } },
  });
  return logoutSuccess[0];
};


module.exports = {
  initSession,
  closeSession,
};
