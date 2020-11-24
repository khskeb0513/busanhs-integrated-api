/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_teacher_info', {
    tc_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tc_day: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tc_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tc_fgubun: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    tc_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food_teacher_info',
    schema: 'dbo',
    timestamps: false
  });
};
