const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_new', {
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payroll_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    character: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    calltime: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    details_received: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    basicrate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    overtime: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    early_call: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    supp_performance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    supp_service: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    supp_service_nocomm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    meal_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    travel_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fitting_fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    holiday_credit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    accommodation: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    other_expenses: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ni_employer: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ni_employee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    book_fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    other_deductions: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vat: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bacs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_new',
    schema: 'public',
    timestamps: false
  });
};
