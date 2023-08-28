const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message_recipient', {
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'message',
        key: 'message_id'
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    delivery_error: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    manual: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    enquiry_artist_id: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      references: {
        model: 'enquiry_artist',
        key: 'enquiry_artist_id'
      }
    }
  }, {
    sequelize,
    tableName: 'message_recipient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "message_recipient_enquiry_artist",
        fields: [
          { name: "enquiry_artist_id" },
        ]
      },
      {
        name: "message_recipient_message_id",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
};
