/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_time', {
    foodb1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    foodb2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    foodl1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    foodl2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    foodd1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    foodd2: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food_time',
    schema: 'dbo',
    timestamps: false
  });
};
