const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registration_slot_link', {
    slot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'registration_slot',
        key: 'slot_id'
      },
      unique: "registration_slot_link_artist_id_key"
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      },
      unique: "registration_slot_link_artist_id_key"
    },
    rereg: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'registration_slot_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "registration_slot_link_artist_id_key",
        unique: true,
        fields: [
          { name: "artist_id" },
          { name: "slot_id" },
        ]
      },
    ]
  });
};
