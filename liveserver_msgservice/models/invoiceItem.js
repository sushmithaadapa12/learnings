const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice_item', {
    invoice_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shortlist',
        key: 'shortlist_id'
      }
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    vat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'invoice_item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "invoice_item_index",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "invoice_item_invoice_index",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "invoice_item_pkey",
        unique: true,
        fields: [
          { name: "invoice_item_id" },
        ]
      },
    ]
  });
};
