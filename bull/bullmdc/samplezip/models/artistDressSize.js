const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_dress_size', {
    description: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    dress_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'artist_dress_size',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_dress_size_pkey",
        unique: true,
        fields: [
          { name: "dress_size" },
        ]
      },
    ]
  });
};
