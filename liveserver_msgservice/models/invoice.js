const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice', {
    invoice_id: {
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
    our_reference: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_paid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    bad_debt: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    total_cached: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    internal_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    finalised: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    vat_explicit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "invoice_date",
        fields: [
          { name: "date" },
        ]
      },
      {
        name: "invoice_date_paid",
        fields: [
          { name: "date_paid" },
        ]
      },
      {
        name: "invoice_pkey",
        unique: true,
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "invoice_project",
        fields: [
          { name: "project_id" },
        ]
      },
    ]
  });
};
