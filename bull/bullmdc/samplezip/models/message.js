const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'message_type',
        key: 'type'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now')
    },
    subject: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "create",
      references: {
        model: 'message_status',
        key: 'status'
      }
    },
    sender: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    delivery_ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now')

    },
    enquiry_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquiry',
        key: 'enquiry_id'
      }
    }
  }, {
    sequelize,
    tableName: 'message',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_message_user_id",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "message_log_pkey",
        unique: true,
        fields: [
          { name: "message_id" },
        ]
      },
      {
        name: "message_ts",
        fields: [
          { name: "ts" },
        ]
      },
    ]
  });
};
