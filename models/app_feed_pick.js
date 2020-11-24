/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_feed_pick', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feed_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reg_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mod_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    choice1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    choice2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    choice3: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_feed_pick',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_feed_pick",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
