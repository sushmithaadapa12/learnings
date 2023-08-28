const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachment_categories', {
    attachment_cat_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attachment_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'attachment_categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "attachment_categories_pkey",
        unique: true,
        fields: [
          { name: "attachment_cat_id" },
        ]
      },
    ]
  });
};
