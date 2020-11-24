/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_sms_info', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    my_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    group_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    s_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    post: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dong: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    e_mail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    m_memo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'my_sms_info',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_my_sms_info",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
