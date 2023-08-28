const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_shortlist_save_submit', {
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortlist_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shortlist_artists: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shortlist_dates: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shortlist_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shortlist_creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    save_shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    folder_archive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    location: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ratecards: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'castr_shortlist_save_submit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "castr_shortlist_save_submit_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
