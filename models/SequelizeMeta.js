/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SequelizeMeta', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      unique: "UQ__SequelizeMeta__1332DBDC"
    }
  }, {
    sequelize,
    tableName: 'SequelizeMeta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SequelizeMeta__123EB7A3",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "UQ__SequelizeMeta__1332DBDC",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
