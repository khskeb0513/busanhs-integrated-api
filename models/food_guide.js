/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_guide', {
    s_name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    s_class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s_ban: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s_stid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    s_bre: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    s_lu: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    s_di: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food_guide',
    schema: 'dbo',
    timestamps: false
  });
};
