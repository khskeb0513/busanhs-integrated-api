/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('delete_tab', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bil_num: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    st_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    d_text: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'delete_tab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_delete_tab",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
