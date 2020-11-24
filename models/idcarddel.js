/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idcarddel', {
    cardNum: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    },
    readDate: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    gubun: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    bigo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'idcarddel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_idcarddel",
        unique: true,
        fields: [
          { name: "cardNum" },
          { name: "readDate" },
          { name: "gubun" },
        ]
      },
    ]
  });
};
