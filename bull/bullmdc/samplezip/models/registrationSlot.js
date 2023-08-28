const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registration_slot', {
    slot_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    reg_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rereg_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    office_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'office',
        key: 'office_id'
      }
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registration_slot',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "registration_slot_pkey",
        unique: true,
        fields: [
          { name: "slot_id" },
        ]
      },
    ]
  });
};
