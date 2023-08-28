const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsproject_production_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chitsproject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits2_chitsproject',
        key: 'id'
      },
      unique: "chits2_chitsproject_prod_chitsproject_id_user_id_733905cc_uniq"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "chits2_chitsproject_prod_chitsproject_id_user_id_733905cc_uniq"
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsproject_production_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsproject_prod_chitsproject_id_user_id_733905cc_uniq",
        unique: true,
        fields: [
          { name: "chitsproject_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "chits2_chitsproject_production_user_chitsproject_id_861d9ffa",
        fields: [
          { name: "chitsproject_id" },
        ]
      },
      {
        name: "chits2_chitsproject_production_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsproject_production_user_user_id_8829578c",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
