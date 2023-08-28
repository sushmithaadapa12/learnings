const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_wardrobe', {
    wardrobe_id: {
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
    tableName: 'artist_wardrobe',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_wardrobe_pkey",
        unique: true,
        fields: [
          { name: "wardrobe_id" },
        ]
      },
    ]
  });
};
