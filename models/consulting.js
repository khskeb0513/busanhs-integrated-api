/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consulting', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    st_id: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    c_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    c_people: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    c_sel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    t_id: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    c_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_state: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'consulting',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_consulting",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
