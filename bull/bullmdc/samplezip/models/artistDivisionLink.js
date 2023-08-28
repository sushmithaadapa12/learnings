const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_division_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'division',
        key: 'division_id'
      }
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_rating',
        key: 'rating_id'
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'artist_division_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_division_artist",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "artist_division_division",
        fields: [
          { name: "division_id" },
        ]
      },
    ]
  });
};
