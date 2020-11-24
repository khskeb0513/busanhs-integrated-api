/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temporary_card', {
    t_id: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    rf_num: {
      type: DataTypes.STRING(14),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'temporary_card',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_temporary_card",
        unique: true,
        fields: [
          { name: "t_id" },
        ]
      },
    ]
  });
};
