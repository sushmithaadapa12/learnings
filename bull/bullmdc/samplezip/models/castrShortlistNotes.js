const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_shortlist_notes', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortlist_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shortlist_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_shortlist_notes',
    schema: 'public',
    timestamps: false
  });
};
