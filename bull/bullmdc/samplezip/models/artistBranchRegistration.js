const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_branch_registration', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    branch_reg_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'branch_registration',
        key: 'branch_reg_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_branch_registration',
    schema: 'public',
    timestamps: false
  });
};
