/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('indaycheck', {
    studentCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    gubunDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    gubun: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bigo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'indaycheck',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_indaycheck",
        unique: true,
        fields: [
          { name: "studentCode" },
          { name: "gubunDate" },
        ]
      },
    ]
  });
};
