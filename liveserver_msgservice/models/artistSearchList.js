const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist_search_list', {
    shortlist_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    skills: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    agemax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    heightmin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    heightmax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chestmin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chestmax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dressmin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dressmax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    waistmin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    waistmax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shoemin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shoemax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ethinic_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    agemin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    office_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nationality_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist_search_list',
    schema: 'public',
    timestamps: false
  });
};
