const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachment_type', {
    attachment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'attachment_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "attachment_type_pkey",
        unique: true,
        fields: [
          { name: "attachment_type_id" },
        ]
      },
    ]
  });
};
