const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/sequelize");
const moment = require("moment");
const {
  paramsDeleted,
  excludeTimestamps
} = require("../../shared/utils/database-sequelize");
const Poll = require("./Poll");

const Question = sequelize.define(
  "Question",
  {
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    QuestionName: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "null"
    },
    Answer: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "null"
    },
    PollId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    ActionStatus: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "C",
      comment: "null"
    },
    CreatedIn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date().toISOString(),
      comment: "null"
    },
    UpdatedIn: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    DeletedIn: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  },
  {
    defaultScope: {
      attributes: { ...excludeTimestamps() },
      where: {
        ActionStatus: {
          [Sequelize.Op.ne]: "D"
        }
      }
    },
    scopes: {},
    timestamps: false,
    tableName: "Question"
  }
);

Question.delete = async function (QuestionId) {
  let deleted = await Question.update(
    { ...paramsDeleted() },
    { where: { QuestionId } }
  );
  return deleted[0];
};

Question.belongsTo(Poll, { foreignKey: "PollId" });
Poll.hasMany(Question, { foreignKey: "PollId" });

module.exports = Question;
