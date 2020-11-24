/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meal_check', {
    st_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    s_date: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    m_meal: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    l_meal: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    e_meal: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'meal_check',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_meal_check",
        unique: true,
        fields: [
          { name: "st_id" },
          { name: "s_date" },
        ]
      },
    ]
  });
};
