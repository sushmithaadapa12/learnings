const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_group_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "auth_group_permissions_group_id_0cd325b0_uniq"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "auth_group_permissions_group_id_0cd325b0_uniq"
    }
  }, {
    sequelize,
    tableName: 'auth_group_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auth_group_permissions_0e939a4f",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "auth_group_permissions_8373b171",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "auth_group_permissions_group_id_0cd325b0_uniq",
        unique: true,
        fields: [
          { name: "group_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "auth_group_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
