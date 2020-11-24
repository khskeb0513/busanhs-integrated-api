/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_survery_detail', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    survery_seq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cnt: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_survery_detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_survery_detail",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
