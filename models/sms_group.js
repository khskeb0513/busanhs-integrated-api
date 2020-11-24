/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_group', {
    g_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'sms_group',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_sms_group",
        unique: true,
        fields: [
          { name: "g_name" },
        ]
      },
    ]
  });
};
