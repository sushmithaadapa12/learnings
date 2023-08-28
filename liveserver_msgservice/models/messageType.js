const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message_type', {
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'message_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "message_type_pkey",
        unique: true,
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
