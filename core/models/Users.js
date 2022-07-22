const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const bcrypt = require('bcrypt');
const { excludeTimestamps } = require('../../shared/utils/database-sequelize');

const Pollster = require('./Pollster');
const Supervisor = require('./Supervisor');

const SALT_HASH_PASSWORD = 10;

const Users = sequelize.define(
  'Users',
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'null',
    },
    Password: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: 'null',
    },
    PollsterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'null',
    },
    SupervisorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'null',
    },
    ActionStatus: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'C',
      comment: 'null',
    },
    CreatedIn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment(),
      comment: 'null',
    },
    UpdatedIn: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'null',
    },
    DeletedIn: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'null',
    },
  },
  {
    hooks: {
      beforeCreate: async (user, options) => {
        if (user.Password) {
          user.Password = bcrypt.hashSync(user.Password, SALT_HASH_PASSWORD);
        }
      },
      // Mejorar este metodo
      beforeUpdate: async (user, options) => {
        /*console.log(options);
                            console.table(['before update', user]);*/
        if (user.Password) {
          let hashPassRequired = options.fields.includes('HashPassRequired');
          /*console.log('user:', user.dataValues);
                                    console.log('hashPassRequired: ', hashPassRequired);*/
          if (hashPassRequired) {
            //console.log('Ok: HashPassRequired and Before Update');
            //console.log(user.Password);

            user.Password = bcrypt.hashSync(user.Password, SALT_HASH_PASSWORD);

            //console.log(user.Password);
          }
        }
      },
    },
    defaultScope: {
      // Solo registros activos
      attributes: { ...excludeTimestamps() },

      where: {
        ActionStatus: {
          [Sequelize.Op.ne]: 'D',
        },
      },
    },
    scopes: {
      individualHookActive: {
        individualHooks: true,
      },
    },
    timestamps: false,
    tableName: 'Users',
  }
);

Users.delete = async function (UserId) {
  let deleted = await Users.update({ ...paramsDeleted() }, { where: { UserId } });
  return deleted[0];
};

// Relationship
// Users 1.. * <-> 0..1 Supervisor
Users.belongsTo(Supervisor, { foreignKey: 'SupervisorId' });
Supervisor.hasOne(Users, { foreignKey: 'SupervisorId' });

// Users 1.. *<-> 0..1 Pollster
Users.belongsTo(Pollster, { foreignKey: 'PollsterId' });
Pollster.hasOne(Users, { foreignKey: 'PollsterId' });

module.exports = Users;
