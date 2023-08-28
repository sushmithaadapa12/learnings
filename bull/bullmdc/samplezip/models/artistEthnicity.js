const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_ethnicity', {
    ethnicity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_ethnicity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_ethnicity_pkey",
        unique: true,
        fields: [
          { name: "ethnicity_id" },
        ]
      },
    ]
  });
};
