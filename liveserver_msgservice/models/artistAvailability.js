const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_availability', {
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_access',
        key: 'access'
      },
      unique: "artist_availability_unique"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: "artist_availability_unique"
    },
    free: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_availability',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_availability_unique",
        unique: true,
        fields: [
          { name: "artist_id" },
          { name: "date" },
        ]
      },
    ]
  });
};
