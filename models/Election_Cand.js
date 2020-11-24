/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Election_Cand', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    e_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    st_id: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ban: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    e_sel: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Election_Cand',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Election_Cand",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
