/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_calendar', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    s_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    reg_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_calendar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_calendar",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
