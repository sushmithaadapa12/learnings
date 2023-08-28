const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_ignored_enquiry', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ignore_list: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_ignored_enquiry',
    schema: 'public',
    timestamps: false
  });
};
