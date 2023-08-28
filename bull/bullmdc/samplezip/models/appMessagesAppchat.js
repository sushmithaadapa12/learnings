const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_messages_appchat', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "app_messages_appchat_uuid_key"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    recipients: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist',
        key: 'artist_id'
      },
      unique: "app_messages_appchat_artist_id_key"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_access_artist: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_access_staff: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_messages_appchat',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "app_messages_appchat_artist_id_key",
        unique: true,
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "app_messages_appchat_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "app_messages_appchat_uuid_key",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
};

