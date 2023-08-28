const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_skill_level', {
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artist_skill_level',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_skill_level_pkey",
        unique: true,
        fields: [
          { name: "level_id" },
        ]
      },
    ]
  });
};
