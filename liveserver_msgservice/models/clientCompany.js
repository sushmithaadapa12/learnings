const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_company', {
    company_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "name_unique"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_company',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_company_pkey",
        unique: true,
        fields: [
          { name: "company_id" },
        ]
      },
      {
        name: "name_unique",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
