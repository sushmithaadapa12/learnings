const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shortlist_open', {
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
    },
    viewer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shortlist_open',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "shortlist_user_id_idx",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "shortlist_viewer_id_idx",
        fields: [
          { name: "viewer_id" },
        ]
      },
    ]
  });
};
