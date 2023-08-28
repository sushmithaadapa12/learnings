const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    foldertype: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    read_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    notification_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    notification_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shortlist_date: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_notifications',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "castr_notifications_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
