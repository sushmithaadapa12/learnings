const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry_artist', {
    enquiry_artist_id: {
      type: DataTypes.CHAR(12),
      allowNull: false,
      primaryKey: true
    },
    enquiry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enquiry',
        key: 'enquiry_id'
      },
      unique: "enquiry_artist_enquiry_id_key"
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      },
      unique: "enquiry_artist_enquiry_id_key"
    },
    answered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    exclude: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'enquiry_artist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enquiry_artist_artist_id",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "enquiry_artist_enquiry_id_key",
        unique: true,
        fields: [
          { name: "enquiry_id" },
          { name: "artist_id" },
        ]
      },
      {
        name: "enquiry_artist_pkey",
        unique: true,
        fields: [
          { name: "enquiry_artist_id" },
        ]
      },
    ]
  });
};
