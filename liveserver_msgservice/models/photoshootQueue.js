const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photoshoot_queue', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    time_add: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    time_open: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_close: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_add: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'photoshoot_queue',
    schema: 'public',
    timestamps: false
  });
};
