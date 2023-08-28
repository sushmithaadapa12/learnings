const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_rating', {
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artist_rating',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_rating_pkey",
        unique: true,
        fields: [
          { name: "rating_id" },
        ]
      },
    ]
  });
};
