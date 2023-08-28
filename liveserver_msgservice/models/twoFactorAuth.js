const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('two_factor_auth', {
    auth_code: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    },
    login_attempts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auth_sends: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zuser_id: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'two_factor_auth',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "two_factor_auth_pkey",
        unique: true,
        fields: [
          { name: "zuser_id" },
        ]
      },
    ]
  });
};
