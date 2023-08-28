const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shortlist_entry', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invoice',
        key: 'invoice_id'
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_accent',
        key: 'accent_id'
      }
    },
    character: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    client_approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    info1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    info2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachment_id: {
      type: DataTypes.CHAR(32),
      allowNull: true,
      references: {
        model: 'artist_attachment',
        key: 'attachment_id'
      }
    },
    info3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    info4: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'shortlist_entry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "shortlist_entry_artist",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "shortlist_entry_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "shortlist_entry_shortlist_fkey",
        fields: [
          { name: "shortlist_id" },
        ]
      },
    ]
  });
};
