const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsproject_production_user', {
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
        model: 'chits_chitsproject',
        key: 'id'
      },
      unique: "chits_chitsproject_produ_chitsproject_id_user_id_00ee871d_uniq"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "chits_chitsproject_produ_chitsproject_id_user_id_00ee871d_uniq"
    }
  }, {
    sequelize,
    tableName: 'chits_chitsproject_production_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsproject_produ_chitsproject_id_user_id_00ee871d_uniq",
        unique: true,
        fields: [
          { name: "chitsproject_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "chits_chitsproject_production_user_chitsproject_id_03b03c59",
        fields: [
          { name: "chitsproject_id" },
        ]
      },
      {
        name: "chits_chitsproject_production_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits_chitsproject_production_user_user_id_63b1cad7",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
