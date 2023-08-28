const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('period', {
    period_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    office_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'office',
        key: 'office_id'
      }
    },
    bookfee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.15
    },
    bookfee_change_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bookfee_change: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'period',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "period_pkey",
        unique: true,
        fields: [
          { name: "period_id" },
        ]
      },
    ]
  });
};
