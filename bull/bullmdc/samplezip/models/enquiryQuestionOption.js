const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry_question_option', {
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enquiry_question',
        key: 'question_id'
      }
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    question_option_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'enquiry_question_option',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enquiry_question_option_pkey",
        unique: true,
        fields: [
          { name: "question_option_id" },
        ]
      },
    ]
  });
};
