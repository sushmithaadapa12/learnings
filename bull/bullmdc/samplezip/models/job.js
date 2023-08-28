const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', {
    job_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'period',
        key: 'period_id'
      },
      unique: "job_artist"
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'office',
        key: 'office_id'
      },
      unique: "job_artist"
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_hair_colour',
        key: 'hair_colour'
      }
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'invoice',
        key: 'invoice_id'
      }
    },
    payroll_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist_dress_size',
        key: 'dress_size'
      }
    },
    character: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    calltime: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    details_received: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
    },
    ni_employer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ni_employee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    book_fee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    other_deductions: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    vat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    bacs: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    info1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    info2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    commission_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    other_deductions_title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    override_date_paid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    info3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    info4: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_artist",
        unique: true,
        fields: [
          { name: "briefing_id" },
          { name: "artist_id" },
        ]
      },
      {
        name: "job_artist_index",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "job_briefing_index",
        fields: [
          { name: "briefing_id" },
        ]
      },
      {
        name: "job_invoice_index",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "job_payroll",
        fields: [
          { name: "payroll_id" },
        ]
      },
      {
        name: "job_pkey",
        unique: true,
        fields: [
          { name: "job_id" },
        ]
      },
      {
        name: "job_state_index",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
