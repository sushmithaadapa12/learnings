const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_hair_colour', {
    description: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    hair_colour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'artist_hair_colour',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_hair_colour_pkey",
        unique: true,
        fields: [
          { name: "hair_colour" },
        ]
      },
    ]
  });
};
