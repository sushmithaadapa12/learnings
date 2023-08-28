const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('office', {
    office_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'office',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "office_pkey",
        unique: true,
        fields: [
          { name: "office_id" },
        ]
      },
    ]
  });
};
