const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('folder_archives', {
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    archive_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    archive_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'folder_archives',
    schema: 'public',
    timestamps: false
  });
};
