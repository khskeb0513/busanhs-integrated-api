/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school_gubun', {
    s_name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    s_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'school_gubun',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_school_gubun",
        unique: true,
        fields: [
          { name: "s_code" },
        ]
      },
    ]
  });
};
