/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_diet', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    j_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    breakfast: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    lunch: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dinner: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_diet',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_diet",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
