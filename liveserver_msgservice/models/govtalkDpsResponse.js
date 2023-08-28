const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('govtalk_dps_response', {
    govtalk_dps_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    data_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    seq_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    xml_data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'govtalk_dps_response',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "govtalk_dps_response_pkey",
        unique: true,
        fields: [
          { name: "govtalk_dps_id" },
        ]
      },
    ]
  });
};
