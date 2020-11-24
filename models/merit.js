/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merit', {
    key_num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    m_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    m_time: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    st_id: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    merit_sel: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    merit_code: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    merit_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    merit_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t_id: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    bigo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    work_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'merit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_merit",
        unique: true,
        fields: [
          { name: "key_num" },
        ]
      },
    ]
  });
};
