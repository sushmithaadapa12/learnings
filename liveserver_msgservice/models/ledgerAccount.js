const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ledger_account', {
    ledger_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ledger_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ledger_account_pkey",
        unique: true,
        fields: [
          { name: "ledger_account_id" },
        ]
      },
    ]
  });
};
