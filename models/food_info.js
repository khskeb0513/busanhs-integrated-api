/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_info', {
    date_info: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_info: {
      type: DataTypes.DATE,
      allowNull: true
    },
    st_id: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    food_gubun: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food_info',
    schema: 'dbo',
    timestamps: false
  });
};
