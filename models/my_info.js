/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_info', {
    s_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "0"
    },
    sms_id: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "0"
    },
    sms_pass: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "0"
    },
    send_state: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    call_back_num: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    school_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sms_nick_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chk_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    chk_pass: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    rf_pass: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    merit_pass: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    y3_sms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    out_sms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    rf_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    state_type: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Grade_date: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Merit_State: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    mr_sum_state: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    class_state: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'my_info',
    schema: 'dbo',
    timestamps: false
  });
};
