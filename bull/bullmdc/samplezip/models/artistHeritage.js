const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_heritage', {
    heritage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist_heritage',
        key: 'heritage_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_heritage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_heritage_pkey",
        unique: true,
        fields: [
          { name: "heritage_id" },
        ]
      },
    ]
  });
};
