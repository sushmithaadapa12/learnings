const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castr_saved_shortlists', {
    shortlist_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    updated_ts: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortlist_dates: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duplicate_shortlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ratecards: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1-FAA\/PACT,2-EQUITY\/PACT,3-BBC EQUITY,4-OTHER"
    }
  }, {
    sequelize,
    tableName: 'castr_saved_shortlists',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "castr_saved_shortlists_pkey",
        unique: true,
        fields: [
          { name: "shortlist_id" },
        ]
      },
    ]
  });
};
