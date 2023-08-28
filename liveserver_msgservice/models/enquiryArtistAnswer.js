const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry_artist_answer', {
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enquiry_question',
        key: 'question_id'
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    value: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    log_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'enquiry_artist_answer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_enq_artist_answer_artist_id",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "idx_enq_artist_answer_question_id",
        fields: [
          { name: "question_id" },
        ]
      },
    ]
  });
};
