const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const { paramsDeleted, excludeTimestamps } = require('../../shared/utils/database-sequelize');

const Supervisor = sequelize.define(
  'Supervisor',
  {
    SupervisorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'null',
    },
    CI: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: 'null',
    },
    Names: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'null',
    },
    Lastnames: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'null',
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'null',
    },
    Phone: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: 'null',
    },
    Gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: 'null',
    },
    Address: {
      type: DataTypes.STRING(200),
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
    tableName: 'Supervisor',
  }
);

Supervisor.delete = async function (SupervisorId) {
  let deleted = await Supervisor.update({ ...paramsDeleted() }, { where: { SupervisorId } });
  return deleted[0];
};


module.exports = Supervisor;
