const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('govtalk_error', {
    govtalk_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'govtalk_request',
        key: 'govtalk_message_id'
      }
    },
    error_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    raised_by: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'govtalk_error',
    schema: 'public',
    timestamps: false
  });
};
