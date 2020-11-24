/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_board_detail', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    board_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cnt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    reg_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_board_detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_board_detail",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
