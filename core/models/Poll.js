const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const { paramsDeleted, excludeTimestamps } = require('../../shared/utils/database-sequelize');
const Users = require('./Users');

const Poll = sequelize.define(
  'Poll',
  {
    PollId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
    },
    Fullname: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: 'null',
    },
    Datebirth: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: 'null',
    },
    Address: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: 'null',
    },
    PhoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: 'null',
    },
    AudioEncode: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'null',
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      defaultValue: new Date().toISOString(),
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
    tableName: 'Poll',
  }
);

// Custom Methods
Poll.delete = async function (PollId) {
  let deleted = await Poll.update({ ...paramsDeleted() }, { where: { PollId } });
  return deleted[0];
};

// Relationship
// Poll 1..* <-> 1..1 Users
Poll.belongsTo(Users, { foreignKey: 'UserId' });
Users.hasMany(Poll, { foreignKey: 'UserId' });


module.exports = Poll;
