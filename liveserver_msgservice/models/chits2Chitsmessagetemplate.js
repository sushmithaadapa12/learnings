const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsmessagetemplate', {
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
    tableName: 'chits2_chitsmessagetemplate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsmessagetemplate_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsmessagetemplate_title_5341ee6d",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "chits2_chitsmessagetemplate_title_5341ee6d_like",
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
