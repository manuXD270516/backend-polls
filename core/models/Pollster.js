/* jshint indent: 2 */

const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const moment = require('moment');
const { paramsDeleted, excludeTimestamps } = require('../../shared/utils/database-sequelize');

const Pollster = sequelize.define(
  'Pollster',
  {
    PollsterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
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
    Latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: 'null',
    },
    Longitude: {
      type: DataTypes.DECIMAL,
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
    tableName: 'Pollster',
  }
);

Pollster.delete = async function (PollsterId) {
  let deleted = await Pollster.update({ ...paramsDeleted() }, { where: { PollsterId } });
  return deleted[0];
};

module.exports = Pollster;
