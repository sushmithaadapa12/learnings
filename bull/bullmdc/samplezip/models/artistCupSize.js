const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_cup_size', {
    description: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cup_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'artist_cup_size',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_cup_size_pkey",
        unique: true,
        fields: [
          { name: "cup_size" },
        ]
      },
    ]
  });
};
