/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studentin', {
    inDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    inTime: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    class: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    bigo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    STD_NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studentin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_studentin",
        unique: true,
        fields: [
          { name: "inDate" },
          { name: "inTime" },
          { name: "st_id" },
          { name: "gubun" },
        ]
      },
    ]
  });
};
