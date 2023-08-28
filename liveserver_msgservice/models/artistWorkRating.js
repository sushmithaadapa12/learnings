const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_work_rating', {
    description: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    work_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    html_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_work_rating',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_work_rating_pkey",
        unique: true,
        fields: [
          { name: "work_rating" },
        ]
      },
    ]
  });
};
