const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitsfaarates', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "chits_chitsfaarates_title_913384f3_uniq"
    },
    rate_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_n: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_sc: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_d_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_n_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_sc_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_n: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_sc: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_d_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_n_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_sc_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    day_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_length_continuous: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    early_call: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_b: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_c: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_e: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    travel_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    travel_b: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    travel_c: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    meal_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    meal_b: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    meal_c: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cancellation_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cancellation_b: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cancellation_c: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_n: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_sc: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    day_length_sc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_ae: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_ae: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chits_chitsfaarates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitsfaarates_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits_chitsfaarates_title_913384f3_like",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "chits_chitsfaarates_title_913384f3_uniq",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
