const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_twofactorauthcode', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_user',
        key: 'id'
      },
      unique: "chits2_twofactorauthcode_user_id_key"
    }
  }, {
    sequelize,
    tableName: 'chits2_twofactorauthcode',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_twofactorauthcode_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_twofactorauthcode_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
