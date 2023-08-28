const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    news_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    casting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "(now"
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'news',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "news_pkey",
        unique: true,
        fields: [
          { name: "news_id" },
        ]
      },
    ]
  });
};
