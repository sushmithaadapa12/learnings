const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_nationality', {
    nationality_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    visa_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artist_nationality',
        key: 'nationality_id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist_nationality',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_nationality_pkey",
        unique: true,
        fields: [
          { name: "nationality_id" },
        ]
      },
    ]
  });
};
