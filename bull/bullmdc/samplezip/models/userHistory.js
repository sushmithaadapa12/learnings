const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_history', {
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    event: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'user_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_history_time",
        fields: [
          { name: "timestamp" },
        ]
      },
    ]
  });
};
