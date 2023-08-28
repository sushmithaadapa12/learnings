const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('division', {
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'division',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "division_pkey",
        unique: true,
        fields: [
          { name: "division_id" },
        ]
      },
    ]
  });
};
