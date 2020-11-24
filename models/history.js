/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    lot: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    key_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    class: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    gubun: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bigo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    STD_NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    merit_sel: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    merit_code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    merit_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    merit_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    work_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'history',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__history__236943A5",
        unique: true,
        fields: [
          { name: "lot" },
        ]
      },
    ]
  });
};
