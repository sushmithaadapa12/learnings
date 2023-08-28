const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_acting_style', {
    acting_style_id: {
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
    tableName: 'artist_acting_style',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_acting_style_pkey",
        unique: true,
        fields: [
          { name: "acting_style_id" },
        ]
      },
    ]
  });
};
