const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry_question', {
    question_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    enquiry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enquiry',
        key: 'enquiry_id'
      }
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enquiry_question_type',
        key: 'type_id'
      }
    },
    optional: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    field: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'enquiry_question',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enquiry_question_pkey",
        unique: true,
        fields: [
          { name: "question_id" },
        ]
      },
    ]
  });
};
