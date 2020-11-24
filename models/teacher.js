/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    t_id: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    t_pass: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    t_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    job_sel: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    t_class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t_ban: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    t_hp: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    t_memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    job_state: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    special: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    power_key: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    t_subject: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teacher',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_teacher",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
