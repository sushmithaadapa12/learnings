const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_template', {
    job_template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'briefing',
        key: 'briefing_id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    basicrate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    overtime: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    early_call: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    night_shoot_broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    supp_performance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    supp_service: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    supp_service_nocomm: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    meal_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    travel_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fitting_fee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    holiday_credit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    accommodation: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    other_expenses: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'job_template',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_template_pkey",
        unique: true,
        fields: [
          { name: "job_template_id" },
        ]
      },
    ]
  });
};
