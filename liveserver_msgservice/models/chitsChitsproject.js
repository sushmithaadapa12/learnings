const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsproject', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    project_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    zope_project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'project_id'
      }
    },
    extra_terms: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra_terms_heading_in_summary: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chits_chitsproject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsproject_e218e063",
        fields: [
          { name: "zope_project_id" },
        ]
      },
      {
        name: "chits_chitsproject_fbac2ac8",
        fields: [
          { name: "project_manager_id" },
        ]
      },
      {
        name: "chits_chitsproject_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
