const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_heritage_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    heritage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_heritage',
        key: 'heritage_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_heritage_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_heritage_link_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
