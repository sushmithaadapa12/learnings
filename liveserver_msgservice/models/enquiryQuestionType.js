const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry_question_type', {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    has_options: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'enquiry_question_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enquiry_question_type_pkey",
        unique: true,
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
