const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll_rti', {
    payroll_rti_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payroll_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payroll',
        key: 'payroll_id'
      }
    },
    govtalk_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'govtalk_request',
        key: 'govtalk_message_id'
      }
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    test_in_live: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'payroll_rti',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payroll_rti_pkey",
        unique: true,
        fields: [
          { name: "payroll_rti_id" },
        ]
      },
    ]
  });
};
