const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('silk_request', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    path: {
      type: DataTypes.STRING(190),
      allowNull: false
    },
    query_params: {
      type: DataTypes.TEXT,
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
    method: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    view_name: {
      type: DataTypes.STRING(190),
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
    encoded_headers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    meta_time: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    meta_num_queries: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meta_time_spent_queries: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pyprofile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    num_sql_queries: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prof_file: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'silk_request',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "silk_request_c4d98dbd",
        fields: [
          { name: "start_time" },
        ]
      },
      {
        name: "silk_request_d6fe1d0b",
        fields: [
          { name: "path" },
        ]
      },
      {
        name: "silk_request_fdbe71b4",
        fields: [
          { name: "view_name" },
        ]
      },
      {
        name: "silk_request_id_5a356c4f_like",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "silk_request_path_9f3d798e_like",
        fields: [
          { name: "path" },
        ]
      },
      {
        name: "silk_request_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "silk_request_view_name_68559f7b_like",
        fields: [
          { name: "view_name" },
        ]
      },
    ]
  });
};
