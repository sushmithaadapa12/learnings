const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lookbook_template', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
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
    tableName: 'lookbook_template',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lookbook_template_pkey",
        unique: true,
        fields: [
          { name: "template_id" },
        ]
      },
    ]
  });
};
