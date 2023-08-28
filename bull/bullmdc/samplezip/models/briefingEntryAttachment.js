const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('briefing_entry_attachment', {
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'briefing',
        key: 'briefing_id'
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'division_attachment_tag',
        key: 'tag_id'
      }
    },
    attachment_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      references: {
        model: 'artist_attachment',
        key: 'attachment_id'
      }
    }
  }, {
    sequelize,
    tableName: 'briefing_entry_attachment',
    schema: 'public',
    timestamps: false
  });
};
