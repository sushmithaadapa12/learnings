const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_settings', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    device_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    notifications: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    artist_limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "castr_settings_pkey1",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
