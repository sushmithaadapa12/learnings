const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_attachment', {
    attachment_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
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
      allowNull: true,
      references: {
        model: 'division_attachment_tag',
        key: 'tag_id'
      }
    },
    creation_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'artist_attachment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_attachment_artist",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "artist_attachment_pkey",
        unique: true,
        fields: [
          { name: "attachment_id" },
        ]
      },
      {
        name: "artist_attachment_tag",
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
};
