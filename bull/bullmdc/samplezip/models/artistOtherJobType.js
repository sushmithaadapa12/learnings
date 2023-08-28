const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_other_job_type', {
    other_job_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artist_other_job_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "artist_other_job_type_pkey",
        unique: true,
        fields: [
          { name: "other_job_type_id" },
        ]
      },
    ]
  });
};
