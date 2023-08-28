const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_registration', {
    branch_reg_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    office_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'office',
        key: 'office_id'
      }
    },
    bookfee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'branch_registration',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "branch_registration_pkey",
        unique: true,
        fields: [
          { name: "branch_reg_id" },
        ]
      },
    ]
  });
};
