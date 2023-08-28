const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll', {
    payroll_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_paid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    paid_artist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date_royline: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tax_period_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tax_period',
        key: 'tax_period_id'
      }
    },
    tax_week: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payroll',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payroll_pkey",
        unique: true,
        fields: [
          { name: "payroll_id" },
        ]
      },
    ]
  });
};
