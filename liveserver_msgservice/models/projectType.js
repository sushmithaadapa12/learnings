const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project_type', {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'project_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "project_credit_pkey",
        unique: true,
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
