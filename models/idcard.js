/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idcard', {
    reDate: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    teacherCode: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    teacherName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sendDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    recivDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    idCard: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'idcard',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_idcard",
        unique: true,
        fields: [
          { name: "reDate" },
          { name: "st_id" },
        ]
      },
    ]
  });
};
