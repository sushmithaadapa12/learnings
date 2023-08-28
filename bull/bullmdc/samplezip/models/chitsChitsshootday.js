const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsshootday', {
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
    send_artist_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    send_production_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    production_email_address: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    send_internal_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    internal_email_address: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    call_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    close_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    chits_basicrate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_accommodation: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_supp_performance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_early_call: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_meal_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_supp_service: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_other_expenses: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_overtime: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_holiday_credit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_travel_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_fitting_fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_other_deductions: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_adjustment: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_adjustment_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chits_dont_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    chits_dont_pay_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'briefing',
        key: 'briefing_id'
      },
      unique: "chits_chitsshootday_briefing_id_key"
    },
    chits_project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits_chitsproject',
        key: 'id'
      }
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    holiday_credit_options: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    travel_allowance_options: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    basic_rate_options: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    overtime_options: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    supp_performance_options: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chits_chitsshootday',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsshootday_65b63d9c",
        fields: [
          { name: "chits_project_id" },
        ]
      },
      {
        name: "chits_chitsshootday_briefing_id_key",
        unique: true,
        fields: [
          { name: "briefing_id" },
        ]
      },
      {
        name: "chits_chitsshootday_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
