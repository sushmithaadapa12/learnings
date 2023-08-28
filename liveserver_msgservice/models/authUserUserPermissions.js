const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_user_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "auth_user_user_permissions_user_id_14a6b632_uniq"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "auth_user_user_permissions_user_id_14a6b632_uniq"
    }
  }, {
    sequelize,
    tableName: 'auth_user_user_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auth_user_user_permissions_8373b171",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "auth_user_user_permissions_e8701ad4",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "auth_user_user_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "auth_user_user_permissions_user_id_14a6b632_uniq",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "permission_id" },
        ]
      },
    ]
  });
};
