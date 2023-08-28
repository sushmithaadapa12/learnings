const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_messages_appmessage', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "app_messages_appmessage_uuid_key"
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
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    delivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delivery_error: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    from_md: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    display: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'app_messages_appchat',
        key: 'id'
      }
    },
    actioned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_messages_appmessage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "app_messages_appmessage_b79bfa8f",
        fields: [
          { name: "chat_id" },
        ]
      },
      {
        name: "app_messages_appmessage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "app_messages_appmessage_uuid_key",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
};

