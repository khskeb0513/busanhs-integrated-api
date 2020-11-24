/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_survery_pick', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    survery_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reg_state: {
      type: DataTypes.STRING(1),
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
    mod_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    detail_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_survery_pick',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_survery_pick",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
