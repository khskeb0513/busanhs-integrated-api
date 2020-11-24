/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_menu', {
    daymenu: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    breakfast: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lunch: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dinner: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food_menu',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_food_menu",
        unique: true,
        fields: [
          { name: "daymenu" },
        ]
      },
    ]
  });
};
