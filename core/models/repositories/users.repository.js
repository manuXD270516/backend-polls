const { Op } = require('sequelize');
const {
  paramsDeleted,
  paramsUpdated,
  finalQuery,
  parameterizePagination,
  excludeTimestamps,
} = require('../../../shared/utils/database-sequelize');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../../database/sequelize');

const Users = require('../Users');

const { UserType } = require('../../../shared/utils/database-sequelize');

// No utilizados
const currentEnvironment = require('../../../config/environments');

const registerUser = async (entity) => {
  return await Users.create(entity);
};

const userExists = async (fields) => {
  return await Users.findOne({
    where: {
      [Op.or]: fields,
    },
  });
};

// codeUserType : {Encuestador=1, Supervisor=2,), modificar el metodo para devolver los objetos asociados
const getUserByUsernameAndType = async (Username, codeUserType) => {
  let filterAuth = {
    Username,
  };
  // verificar el tipo de usuario
  let userType = '';
  switch (parseInt(codeUserType)) {
    case UserType.USER_POLLESTER:
      userType = 'PollsterId';
      break;
    case UserType.USER_SUPERVISOR:
      userType = 'SupervisorId';
      break;
    default:
      break;
  }
  filterAuth[userType] = { [Op.ne]: null };

  return await Users.findOne({
    where: filterAuth,
  });
};

const userWithPasswordTokenExists = async (passwordToken) => {
  console.log(passwordToken);
  let decodedPayload = await jwt.decode(
    passwordToken,
    currentEnvironment.PASSWORD_RECOVER.secret_key
  );
  const {
    userPayload: { UserId, Email },
  } = decodedPayload;
  console.log({ decodedPayload });
  const user = await Users.findOne({
    where: {
      UserId: UserId,
      Username: Email,
      PasswordChangeToken: { [Op.ne]: null },
    },
  });
  return user?.UserId;
};

// No utilizado
const getUserWithActiveRoles = async (UserId) => {
  let userFind = await Users.findOne({
    //raw: true,
    attributes: excludeTimestamps(),
    where: {
      UserId,
    },
    /* include: [
			{
				attributes: ["RoleName"],
				model: Role,
				as: "Roles",
				required: false,
				through: {
					attributes: [],
				},
			},
		], */
  });
  return userFind;
};

// Agregar el atributo para las notificaciones posteriorment
const logoutUser = async (UserId) => {
  let fields = { TokenNotification: null };
  let logout = await Users.update(fields, { where: { UserId } });
  return logout[0];
};

// No utilizado
const getUserById = async (userId) => {
  return await Users.findByPk(userId);
};

const getUserForType = async (anyIdentifier, userType) => {
  let filterUserType = {};
  switch (userType) {
    case UserType.USER_POLLESTER:
      filterUserType['PollId'] = anyIdentifier;
      break;
    case UserType.USER_SUPERVISOR:
      filterUserType['SupervisorId'] = anyIdentifier;
      break;
    default:
      break;
  }
  return await Users.findOne({ where: filterUserType });
};
/**
 * @param {*} userId the user identifier
 * @param {*} userDataToUpdate.password The password to update
 */
const editUserPassword = async (userId, userDataToUpdate = { Password }) => {
  userDataToUpdate = {
    ...userDataToUpdate,
    PasswordChangeToken: null,
    ...paramsUpdated(),
    HashPassRequired: true,
  };
  console.log(userDataToUpdate);
  await Users.scope('defaultScope', 'individualHookActive').update(userDataToUpdate, {
    where: { UserId: userId },
  });
};

/**
 * Creates a PasswordChange token in  DB and returns the token
 * @param {*} Email Email of the user that want a token for password recover
 * @returns {String}  token used for recover Password
 */
const createPasswordChangeTokenWithEmail = async (Email) => {
  let user = await Users.findOne({ where: { Username: Email } });
  const userPayload = {
    UserId: user.UserId,
    Email: user.Username,
    CreatedAt: Date.now(),
  };
  const token = getPasswordChangeToken({ userPayload });

  user = (
    await Users.update(
      { PasswordChangeToken: token },
      { where: { UserId: user.UserId }, returning: true }
    )
  )[1];
  console.log({ token });

  return token;
};

const editUserForType = async (userFields, anyIdentifier, withPassword, userType) => {
  let filterUserType = {};
  //console.log(userFields);
  userFields = {
    ...userFields,
    ...paramsUpdated(),
    HashPassRequired: withPassword,
  };

  switch (parseInt(userType)) {
    case UserType.USER_POLLESTER:
      filterUserType['PollId'] = anyIdentifier;
      break;
    case UserType.USER_SUPERVISOR:
      filterUserType['SupervisorId'] = anyIdentifier;
      break;
    default:
      break;
  }
  //console.log(filterUserType);
  let updated;
  if (withPassword) {
    console.log(userFields);
    console.log(filterUserType);
    updated = await Users.scope('defaultScope', 'individualHookActive').update(userFields, {
      where: filterUserType,
    });
  } else {
    updated = await Users.update(userFields, {
      where: filterUserType,
    });
  }
  return updated[0];
};

const deleteUser = async (UserId) => {
  let deleted = await Users.update(
    { ...paramsDeleted() },
    {
      where: {
        UserId,
      },
    }
  );
  return deleted[0];
};

const deleteUserByEmployee = async (EmployeeId) => {
  let deleted = await Users.update(
    { ...paramsDeleted() },
    {
      where: {
        EmployeeId,
      },
    }
  );
};

module.exports = {
  registerUser,
  userExists,
  logoutUser,
  editUserForType,
  getUserByUsernameAndType,
  getUserWithActiveRoles,
  getUserForType,
  deleteUserByEmployee,
  editUserPassword,
  createPasswordChangeTokenWithEmail,
  userWithPasswordTokenExists,
  getUserById,
};
