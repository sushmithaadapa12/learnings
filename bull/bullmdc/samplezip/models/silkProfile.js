const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('silk_profile', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_taken: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    file_path: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    line_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    end_line_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    func_name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    exception_raised: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dynamic: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'silk_profile',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "silk_profile_f68d2c36",
        fields: [
          { name: "request_id" },
        ]
      },
      {
        name: "silk_profile_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
