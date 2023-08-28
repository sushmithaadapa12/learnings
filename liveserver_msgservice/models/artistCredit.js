const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_credit', {
    credit_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'division',
        key: 'division_id'
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    production: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    producer: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artist_credit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_credit_pkey",
        unique: true,
        fields: [
          { name: "credit_id" },
        ]
      },
    ]
  });
};
