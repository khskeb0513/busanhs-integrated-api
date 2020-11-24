/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_feed', {
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
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    breakfast: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lunch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dinner: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smsflag: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    parentflag: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    viewflag: {
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
    tableName: 'app_feed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_feed",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
