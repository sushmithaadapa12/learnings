const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_maddog_settings', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    device_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    notifications: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    app_version: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'castr_maddog_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "maddog_settings_pkey",
        unique: true,
        fields: [
          { name: "artist_id" },
        ]
      },
    ]
  });
};
