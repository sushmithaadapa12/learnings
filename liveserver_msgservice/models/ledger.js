const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ledger', {
    ledger_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "(now"
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dr_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ledger_account',
        key: 'ledger_account_id'
      }
    },
    cr_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ledger_account',
        key: 'ledger_account_id'
      }
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ledger',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ledger_pkey",
        unique: true,
        fields: [
          { name: "ledger_id" },
        ]
      },
    ]
  });
};
