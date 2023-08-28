const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('govtalk_dps_rtinot', {
    govtalk_dps_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'govtalk_dps_response',
        key: 'govtalk_dps_id'
      }
    },
    processed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    seq_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    form_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pay_id: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    nino_provided: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nino_replacement: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    correlation_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    message_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_ref: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'govtalk_dps_rtinot',
    schema: 'public',
    timestamps: false
  });
};
