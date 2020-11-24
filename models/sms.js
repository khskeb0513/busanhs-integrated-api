/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms', {
    studentcode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    smsDate: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    smsTime: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    meritCode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    studentname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sClass: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sTeam: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sendDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sms',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_sms",
        unique: true,
        fields: [
          { name: "studentcode" },
          { name: "smsDate" },
          { name: "smsTime" },
          { name: "meritCode" },
        ]
      },
    ]
  });
};
