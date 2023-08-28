const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsproject', {
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
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    extra_terms: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra_terms_heading_in_summary: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    project_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    rates_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chits2_chitsfaarates',
        key: 'id'
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
    rates_bbc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chits2_chitsbbcrates',
        key: 'id'
      }
    },
    rates_new_faa_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chits2_chitsnewfaarates',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsproject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsproject_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsproject_project_manager_id_d6a9e7ee",
        fields: [
          { name: "project_manager_id" },
        ]
      },
      {
        name: "chits2_chitsproject_rates_bbc_id_c1520b10",
        fields: [
          { name: "rates_bbc_id" },
        ]
      },
      {
        name: "chits2_chitsproject_rates_id_0d9138e0",
        fields: [
          { name: "rates_id" },
        ]
      },
      {
        name: "chits2_chitsproject_rates_new_faa_id_fa5bddf8",
        fields: [
          { name: "rates_new_faa_id" },
        ]
      },
      {
        name: "chits2_chitsproject_zope_project_id_9d1f984b",
        fields: [
          { name: "zope_project_id" },
        ]
      },
    ]
  });
};
