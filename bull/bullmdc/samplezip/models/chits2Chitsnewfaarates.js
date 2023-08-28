const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsnewfaarates', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "chits2_chitsnewfaarates_title_key"
    },
    day_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_length_continuous: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_length_sc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    early_call_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    early_call_sunday_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    early_travel_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    night_time_rate_start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    day_time_rate_start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    rate_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_nbr: {
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
    rate_a: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_ae: {
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
    holiday_d_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_n_ph: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_sc_ph: {
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
    holiday_ot_d: {
      type: DataTypes.DECIMAL,
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
    supp_a_choices: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    supp_b: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_b_choices: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    supp_c: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_c_choices: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    supp_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_d_choices: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    supp_e: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_e_choices: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
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
    travel_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    broken_lunch: {
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
    night_shoot_broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsnewfaarates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsnewfaarates_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsnewfaarates_title_224abfe9_like",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "chits2_chitsnewfaarates_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
