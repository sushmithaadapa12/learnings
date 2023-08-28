const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_groups', {
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
      unique: "auth_user_groups_user_id_94350c0c_uniq"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "auth_user_groups_user_id_94350c0c_uniq"
    }
  }, {
    sequelize,
    tableName: 'auth_user_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auth_user_groups_0e939a4f",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "auth_user_groups_e8701ad4",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "auth_user_groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "auth_user_groups_user_id_94350c0c_uniq",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "group_id" },
        ]
      },
    ]
  });
};
