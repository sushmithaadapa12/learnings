const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsshootday_production_user', {
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
        model: 'chits2_chitsshootday',
        key: 'id'
      },
      unique: "chits2_chitsshootday_pro_chitsshootday_id_user_id_883cc34f_uniq"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "chits2_chitsshootday_pro_chitsshootday_id_user_id_883cc34f_uniq"
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsshootday_production_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsshootday_pro_chitsshootday_id_user_id_883cc34f_uniq",
        unique: true,
        fields: [
          { name: "chitsshootday_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "chits2_chitsshootday_production_user_chitsshootday_id_68f3453c",
        fields: [
          { name: "chitsshootday_id" },
        ]
      },
      {
        name: "chits2_chitsshootday_production_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsshootday_production_user_user_id_be0a08f0",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
