const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_entry_shortlists', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'castr_saved_shortlists',
        key: 'shortlist_id'
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_entry_shortlists',
    schema: 'public',
    timestamps: false
  });
};
