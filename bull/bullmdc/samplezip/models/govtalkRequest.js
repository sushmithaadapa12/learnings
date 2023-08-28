const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('govtalk_request', {
    govtalk_message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    test: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    correlation_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    request_ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    request_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    response_ts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    response_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    response_end_point: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    poll_ts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    error: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    govtalk_class: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'govtalk_request',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "govtalk_request_pkey",
        unique: true,
        fields: [
          { name: "govtalk_message_id" },
        ]
      },
    ]
  });
};
