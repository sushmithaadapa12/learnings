const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lookbook', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'lookbook',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lookbook_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
