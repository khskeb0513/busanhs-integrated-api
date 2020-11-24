/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_survery', {
    seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_state: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ban: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    reg_state: {
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
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    cnt: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    rec_state: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    view_state: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    all_state: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_survery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_app_survery",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
