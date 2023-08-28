const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_access', {
    access: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_access',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_access_pkey",
        unique: true,
        fields: [
          { name: "access" },
        ]
      },
    ]
  });
};
