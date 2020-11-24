/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discip_list', {
    st_id: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    key_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    s_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    t_id: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    ed_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discip_list',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_discip_list",
        unique: true,
        fields: [
          { name: "key_num" },
          { name: "st_id" },
        ]
      },
    ]
  });
};
