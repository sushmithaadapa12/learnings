const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shortlist_entry_attachment', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shortlist',
        key: 'shortlist_id'
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
    },
    folder_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shortlist_entry_attachment',
    schema: 'public',
    timestamps: false
  });
};
