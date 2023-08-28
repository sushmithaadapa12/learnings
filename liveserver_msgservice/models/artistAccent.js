const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_accent', {
    accent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    seqno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'artist_accent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_accent_pkey",
        unique: true,
        fields: [
          { name: "accent_id" },
        ]
      },
    ]
  });
};
