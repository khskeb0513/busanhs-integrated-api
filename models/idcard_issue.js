/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idcard_issue', {
    st_id: {
      type: DataTypes.STRING(26),
      allowNull: false,
      primaryKey: true
    },
    s_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "신청,도착"
    },
    rce_rf_card: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'idcard_issue',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_idcard_issue",
        unique: true,
        fields: [
          { name: "st_id" },
        ]
      },
    ]
  });
};
