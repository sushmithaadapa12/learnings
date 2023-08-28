const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shortlist_inactive', {
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'shortlist_inactive',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "shortlist_inactive_user_id_idx",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
