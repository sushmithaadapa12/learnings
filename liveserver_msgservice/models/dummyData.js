const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dummy_data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cfp_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ak_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null
    },
    ak_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: null
    }
  }, {
    sequelize,
    tableName: 'dummy_data',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
