/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mem_week', {
    st_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    date_receiv: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    a_breakfast: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    a_lunch: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    a_dinner: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    breakfast: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    lunch: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    dinner: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    food_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bigo1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bigo2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    day_receiv: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mem_week',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_mem_week",
        unique: true,
        fields: [
          { name: "st_id" },
          { name: "date_end" },
          { name: "date_start" },
        ]
      },
    ]
  });
};
