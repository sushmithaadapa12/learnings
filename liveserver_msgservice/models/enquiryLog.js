const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enquiry_log', {
    enquiry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enquiry',
        key: 'enquiry_id'
      }
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    event: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    enquiry_artist_id: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      references: {
        model: 'enquiry_artist',
        key: 'enquiry_artist_id'
      }
    },
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'enquiry_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enquiry_log_enquiry_id",
        fields: [
          { name: "enquiry_id" },
        ]
      },
      {
        name: "enquiry_log_pkey",
        unique: true,
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "enquiry_log_ts_idx",
        fields: [
          { name: "ts" },
        ]
      },
    ]
  });
};
