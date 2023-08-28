const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_county', {
    county_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    office_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'office',
        key: 'office_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_county',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_county_pkey",
        unique: true,
        fields: [
          { name: "county_id" },
        ]
      },
    ]
  });
};
