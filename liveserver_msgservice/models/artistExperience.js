const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_experience', {
    experience_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shortlist',
        key: 'shortlist_id'
      }
    },
    seqno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    years: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    place: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    certificate: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'artist_experience',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_experience_artist_fkey",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "artist_experience_pkey",
        unique: true,
        fields: [
          { name: "experience_id" },
        ]
      },
    ]
  });
};
