const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsartistcheckin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    uid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "chits2_chitsartistcheckin_shoot_day_id_artist_id_9d3feb28_uniq"
    },
    is_no_show: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    checked_in_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    },
    shoot_day_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits2_chitsshootday',
        key: 'id'
      },
      unique: "chits2_chitsartistcheckin_shoot_day_id_artist_id_9d3feb28_uniq"
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsartistcheckin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsartistcheckin_checked_in_by_id_48c706db",
        fields: [
          { name: "checked_in_by_id" },
        ]
      },
      {
        name: "chits2_chitsartistcheckin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsartistcheckin_shoot_day_id_305a5e15",
        fields: [
          { name: "shoot_day_id" },
        ]
      },
      {
        name: "chits2_chitsartistcheckin_shoot_day_id_artist_id_9d3feb28_uniq",
        unique: true,
        fields: [
          { name: "shoot_day_id" },
          { name: "artist_id" },
        ]
      },
    ]
  });
};
