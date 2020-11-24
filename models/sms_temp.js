/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_temp', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    t_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    snd_date: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    hp_num: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    st_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    msg: {
      type: DataTypes.STRING(85),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sms_temp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_my_sms_temp",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
