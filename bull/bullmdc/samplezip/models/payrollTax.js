const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll_tax', {
    payroll_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payroll',
        key: 'payroll_id'
      }
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'project_id'
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    ni_category: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "A"
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
    pay_taxable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    pay_bands: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL),
      allowNull: true
    },
    pay_expenses: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    pay_deductions: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    date_paid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payroll_tax',
    schema: 'public',
    timestamps: false
  });
};
