const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('briefing', {
    briefing_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shortlist',
        key: 'shortlist_id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    extras_required: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    add_instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'division',
        key: 'division_id'
      }
    },
    info1_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 1"
    },
    info2_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 2"
    },
    info3_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 3"
    },
    info4_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 4"
    }
  }, {
    sequelize,
    tableName: 'briefing',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "briefing_date_index",
        fields: [
          { name: "date" },
        ]
      },
      {
        name: "briefing_division",
        fields: [
          { name: "division_id" },
        ]
      },
      {
        name: "briefing_pkey",
        unique: true,
        fields: [
          { name: "briefing_id" },
        ]
      },
      {
        name: "briefing_project_index",
        fields: [
          { name: "project_id" },
        ]
      },
    ]
  });
};
