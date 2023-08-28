const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('silk_sqlquery', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_taken: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    traceback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    request_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'silk_request',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'silk_sqlquery',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "silk_sqlquery_f68d2c36",
        fields: [
          { name: "request_id" },
        ]
      },
      {
        name: "silk_sqlquery_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "silk_sqlquery_request_id_6f8f0527_like",
        fields: [
          { name: "request_id" },
        ]
      },
    ]
  });
};
