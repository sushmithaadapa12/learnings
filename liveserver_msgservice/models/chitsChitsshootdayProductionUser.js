const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsshootday_production_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chitsshootday_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits_chitsshootday',
        key: 'id'
      },
      unique: "chits_chitsshootday_production_u_chitsshootday_id_3134ed8d_uniq"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "chits_chitsshootday_production_u_chitsshootday_id_3134ed8d_uniq"
    }
  }, {
    sequelize,
    tableName: 'chits_chitsshootday_production_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsshootday_production_u_chitsshootday_id_3134ed8d_uniq",
        unique: true,
        fields: [
          { name: "chitsshootday_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "chits_chitsshootday_production_user_069f2831",
        fields: [
          { name: "chitsshootday_id" },
        ]
      },
      {
        name: "chits_chitsshootday_production_user_e8701ad4",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "chits_chitsshootday_production_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
