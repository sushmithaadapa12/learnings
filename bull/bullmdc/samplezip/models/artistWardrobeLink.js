const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_wardrobe_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    wardrobe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_wardrobe',
        key: 'wardrobe_id'
      }
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_wardrobe_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_wardrobe_link_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
