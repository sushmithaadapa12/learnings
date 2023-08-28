const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsartistcheckin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    uid: {
      type: DataTypes.UUID,
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
        model: 'chits_chitsshootday',
        key: 'id'
      },
      unique: "chits_chitsartistcheckin_shoot_day_id_5ee54621_uniq"
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "chits_chitsartistcheckin_shoot_day_id_5ee54621_uniq"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chits_chitsartistcheckin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsartistcheckin_59f6ab79",
        fields: [
          { name: "shoot_day_id" },
        ]
      },
      {
        name: "chits_chitsartistcheckin_fc58750b",
        fields: [
          { name: "checked_in_by_id" },
        ]
      },
      {
        name: "chits_chitsartistcheckin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits_chitsartistcheckin_shoot_day_id_5ee54621_uniq",
        unique: true,
        fields: [
          { name: "shoot_day_id" },
          { name: "artist_id" },
        ]
      },
    ]
  });
};
