const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_acting_style_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'project_id'
      }
    },
    acting_style_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_accent',
        key: 'accent_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_acting_style_link',
    schema: 'public',
    timestamps: false
  });
};
