const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry', {
    enquiry_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'briefing',
        key: 'briefing_id'
      }
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    open_cutoff: {
      type: DataTypes.DATE,
      allowNull: true
    },
    new: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    allow_opt_out: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    enquiry_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquiry_type',
        key: 'id'
      }
    },
    project_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'project_type',
        key: 'type_id'
      }
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'project',
        key: 'project_id'
      }
    },
    include_info1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    include_info2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    include_info3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    include_info4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'enquiry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enquiry_pkey",
        unique: true,
        fields: [
          { name: "enquiry_id" },
        ]
      },
      {
        name: "enquiry_type_id_111",
        fields: [
          { name: "enquiry_type_id" },
        ]
      },
      {
        name: "project_id_111",
        fields: [
          { name: "project_id" },
        ]
      },
      {
        name: "project_type_id_111",
        fields: [
          { name: "project_type_id" },
        ]
      },
    ]
  });
};
