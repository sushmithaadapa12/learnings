const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_county_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    county_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_county',
        key: 'county_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_county_link',
    schema: 'public',
    timestamps: false
  });
};
