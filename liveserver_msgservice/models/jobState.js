const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_state', {
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    worked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    invoice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'job_state',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_state_pkey",
        unique: true,
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
