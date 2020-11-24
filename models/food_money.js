/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_money', {
    food_m1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_m2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_m3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'food_money',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_food_money",
        unique: true,
        fields: [
          { name: "food_key" },
        ]
      },
    ]
  });
};
