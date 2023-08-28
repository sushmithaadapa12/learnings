const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_language', {
    language_id: {
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
    tableName: 'artist_language',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_language_pkey",
        unique: true,
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};
