const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitstextpage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chits_chitstextpage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitstextpage_2dbcba41",
        fields: [
          { name: "slug" },
        ]
      },
      {
        name: "chits_chitstextpage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits_chitstextpage_slug_c4756fbb_like",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
