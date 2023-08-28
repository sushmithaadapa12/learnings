const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_accent_link', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'division',
        key: 'division_id'
      }
    },
    accent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist_accent',
        key: 'accent_id'
      }
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_accent_link',
    schema: 'public',
    timestamps: false
  });
};
