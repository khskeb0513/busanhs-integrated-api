/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meritcode', {
    m_sel_code: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    mr_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    mr_text: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mr_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    group_sel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sms_date: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sms_time: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sms_parent: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sms_teacher: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sms_msg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    met_exit_sel: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'meritcode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_meritcode",
        unique: true,
        fields: [
          { name: "m_sel_code" },
          { name: "mr_code" },
        ]
      },
    ]
  });
};
