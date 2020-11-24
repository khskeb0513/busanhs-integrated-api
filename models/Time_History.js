/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Time_History', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    JOB_ID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    JOB_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DayGubun: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FirstINTime: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SecondINTime: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    OutTime: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Time_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Time_History",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
