/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('READSTATE', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    notikind: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    listnum: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    writedate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    readdate: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'READSTATE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_READSTATE",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
