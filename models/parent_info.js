/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parent_info', {
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    post: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    h_phone: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    m_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    m_hp: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    f_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    f_hp: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    who_sms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    st_hp: {
      type: DataTypes.STRING(14),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parent_info',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_parent_info",
        unique: true,
        fields: [
          { name: "st_id" },
        ]
      },
    ]
  });
};
