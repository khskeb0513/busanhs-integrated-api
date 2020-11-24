/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_school_noti', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cnt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(200),
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
    reg_state: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rec_state: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ban: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_school_noti',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_school_noti",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
