const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_eye_colour', {
    description: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    eye_colour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'artist_eye_colour',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_eye_colour_pkey",
        unique: true,
        fields: [
          { name: "eye_colour" },
        ]
      },
    ]
  });
};
