/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studend_end', {
    o_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    o_time: {
      type: DataTypes.STRING(6),
      allowNull: false
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
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    STD_NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studend_end',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_studend_end",
        unique: true,
        fields: [
          { name: "o_date" },
          { name: "st_id" },
          { name: "state" },
        ]
      },
    ]
  });
};
