const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shortlist', {
    shortlist_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    implicit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'invoice',
        key: 'invoice_id'
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist_rating',
        key: 'rating_id'
      }
    },
    folder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shortlist',
        key: 'shortlist_id'
      }
    },
    info1_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 1"
    },
    info2_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 2"
    },
    permanent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    updated_ts: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    info3_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 3"
    },
    info4_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Info 4"
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortlist_dates: {
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
    },
    available_shortlist: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    artist_entry_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    folder_archive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'shortlist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "shortlist_client_fkey",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "shortlist_owner_fkey",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "shortlist_parent_id_idx",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "shortlist_pkey",
        unique: true,
        fields: [
          { name: "shortlist_id" },
        ]
      },
      {
        name: "shortlist_updated",
        fields: [
          { name: "updated_ts" },
        ]
      },
    ]
  });
};
