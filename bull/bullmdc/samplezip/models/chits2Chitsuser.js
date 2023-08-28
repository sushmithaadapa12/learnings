const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsuser', {
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
      unique: "chits2_chitsuser_user_id_key"
    },
    zope_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      },
      unique: "chits2_chitsuser_zope_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsuser',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsuser_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsuser_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "chits2_chitsuser_zope_user_id_key",
        unique: true,
        fields: [
          { name: "zope_user_id" },
        ]
      },
    ]
  });
};
