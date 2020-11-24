/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studenthistory', {
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    class1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    t_info1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    class2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    t_info2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    class3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    t_info3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bigo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studenthistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_studenthistory",
        unique: true,
        fields: [
          { name: "st_id" },
        ]
      },
    ]
  });
};
