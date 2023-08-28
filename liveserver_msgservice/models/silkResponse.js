const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('silk_response', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    status_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    raw_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    encoded_headers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    request_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'silk_request',
        key: 'id'
      },
      unique: "silk_response_request_id_key"
    }
  }, {
    sequelize,
    tableName: 'silk_response',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "silk_response_id_dda88710_like",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "silk_response_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "silk_response_request_id_1e8e2776_like",
        fields: [
          { name: "request_id" },
        ]
      },
      {
        name: "silk_response_request_id_key",
        unique: true,
        fields: [
          { name: "request_id" },
        ]
      },
    ]
  });
};
