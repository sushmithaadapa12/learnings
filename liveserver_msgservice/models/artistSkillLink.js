const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_skill_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invoice',
        key: 'invoice_id'
      }
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_accent',
        key: 'accent_id'
      }
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_language_level',
        key: 'level_id'
      }
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_skill_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_skill_link_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
