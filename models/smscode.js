/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smscode', {
    smsCode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    smsText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    smsDay: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smsTime: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smsFStop: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smsTStop: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    smsStop: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'smscode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_smscode",
        unique: true,
        fields: [
          { name: "smsCode" },
        ]
      },
    ]
  });
};
