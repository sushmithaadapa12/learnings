const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shortlist_access', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shortlist',
        key: 'shortlist_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'shortlist_access',
    schema: 'public',
    timestamps: false
  });
};
