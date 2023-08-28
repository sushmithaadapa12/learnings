const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitstextpage', {
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
    tableName: 'chits2_chitstextpage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitstextpage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitstextpage_slug_d95f30a7",
        fields: [
          { name: "slug" },
        ]
      },
      {
        name: "chits2_chitstextpage_slug_d95f30a7_like",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
