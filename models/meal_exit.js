/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meal_exit', {
    st_id: {
      type: DataTypes.STRING(26),
      allowNull: false,
      primaryKey: true
    },
    m_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    m_time: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'meal_exit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_meal_exit",
        unique: true,
        fields: [
          { name: "st_id" },
          { name: "m_date" },
          { name: "state" },
        ]
      },
    ]
  });
};
