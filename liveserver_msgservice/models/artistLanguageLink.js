const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_language_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_access',
        key: 'access'
      }
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_dance_skill',
        key: 'skill_id'
      }
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_state',
        key: 'state_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_language_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_language_link_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
