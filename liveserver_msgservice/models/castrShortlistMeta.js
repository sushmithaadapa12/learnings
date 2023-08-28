const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_shortlist_meta', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_shortlist_meta',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "shortlist_id_pkey",
        unique: true,
        fields: [
          { name: "shortlist_id" },
        ]
      },
    ]
  });
};
