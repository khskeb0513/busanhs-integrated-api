/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nocheckday', {
    noCheckDay: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    bigo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nocheckday',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_nocheckday",
        unique: true,
        fields: [
          { name: "noCheckDay" },
        ]
      },
    ]
  });
};
