const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_ethnicity_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_access',
        key: 'access'
      }
    },
    ethnicity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_acting_style',
        key: 'acting_style_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_ethnicity_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_availability_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "artist_ethnicity_link_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
