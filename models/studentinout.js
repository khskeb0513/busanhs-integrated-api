/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studentinout', {
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    o_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    o_time: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    in_time: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    w_t_id: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    o_memo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studentinout',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_studentinout",
        unique: true,
        fields: [
          { name: "st_id" },
          { name: "state" },
          { name: "o_date" },
          { name: "o_time" },
        ]
      },
    ]
  });
};
