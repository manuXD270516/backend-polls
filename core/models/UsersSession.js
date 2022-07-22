const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const { paramsDeleted, excludeTimestamps } = require('../../shared/utils/database-sequelize');
const Users = require('./Users');

const UsersSession = sequelize.define(
  'UsersSession',
  {
    UsersSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
    },
    UsersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'null',
    },
    TokenSession: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'null',
    },
    SessionActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))',
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
    defaultScope: {
      attributes: { ...excludeTimestamps() },
      where: {
        ActionStatus: {
          [Sequelize.Op.ne]: 'D',
        },
      },
    },
    scopes: {},
    timestamps: false,
    tableName: 'UsersSession',
  }
);

// Relationship UsersSession 1.. *<-> 1..1 Users
UsersSession.belongsTo(Users, { foreignKey: 'UsersId' });
Users.hasMany(UsersSession, { foreignKey: 'UsersId' });

module.exports = UsersSession;


