const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsmessagetemplate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sms_message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chits_chitsmessagetemplate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsmessagetemplate_d5d3db17",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "chits_chitsmessagetemplate_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits_chitsmessagetemplate_title_2cd98aee_like",
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
