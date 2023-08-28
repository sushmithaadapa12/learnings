const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authtoken_token', {
    key: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "authtoken_token_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'authtoken_token',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "authtoken_token_key_10f0b77e_like",
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "authtoken_token_pkey",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "authtoken_token_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
