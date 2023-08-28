const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message_status', {
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'message_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "message_status_pkey",
        unique: true,
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
