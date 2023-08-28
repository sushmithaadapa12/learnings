const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_rating_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_access',
        key: 'access'
      }
    },
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_accent',
        key: 'accent_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_rating_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_rating_link_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
