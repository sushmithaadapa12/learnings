const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('silk_profile_queries', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'silk_profile',
        key: 'id'
      },
      unique: "silk_profile_queries_profile_id_b2403d9b_uniq"
    },
    sqlquery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'silk_sqlquery',
        key: 'id'
      },
      unique: "silk_profile_queries_profile_id_b2403d9b_uniq"
    }
  }, {
    sequelize,
    tableName: 'silk_profile_queries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "silk_profile_queries_83a0eb3f",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "silk_profile_queries_eb5005ae",
        fields: [
          { name: "sqlquery_id" },
        ]
      },
      {
        name: "silk_profile_queries_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "silk_profile_queries_profile_id_b2403d9b_uniq",
        unique: true,
        fields: [
          { name: "profile_id" },
          { name: "sqlquery_id" },
        ]
      },
    ]
  });
};
