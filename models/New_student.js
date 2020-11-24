/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('New_student', {
    st_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    class: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ban: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'New_student',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_New_student",
        unique: true,
        fields: [
          { name: "st_id" },
        ]
      },
    ]
  });
};
