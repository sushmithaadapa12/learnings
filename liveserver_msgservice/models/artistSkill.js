const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_skill', {
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    has_level: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    has_value: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'artist_skill',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_skill_pkey",
        unique: true,
        fields: [
          { name: "skill_id" },
        ]
      },
    ]
  });
};
