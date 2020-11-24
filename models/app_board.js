/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_board', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ban: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cnt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    doc_state: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_board',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_board",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
