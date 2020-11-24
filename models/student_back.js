/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_back', {
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ban: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rf_card_num: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    out_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    st_memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    st_lock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    jumin: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    barcode_num: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'student_back',
    schema: 'dbo',
    timestamps: false
  });
};
