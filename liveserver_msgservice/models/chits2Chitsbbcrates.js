const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsbbcrates', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "chits2_chitsbbcrates_title_key"
    },
    day_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_length_continuous: {
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
    multi_episode_addition: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate_d: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_n: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_d_wo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_n_wo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_d_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_n_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_d_r: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_n_r: {
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
    rate_a_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_ae_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_au: {
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
    ot_d_wo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_n_wo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_d_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_n_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_d_r: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ot_n_r: {
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
    holiday_d_wo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    holiday_n_wo: {
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
    supp_f: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_f_choices: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    supp_g: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    supp_g_choices: {
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
    day_length_semi_continuous: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    travel_bicycle: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    travel_car: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    travel_motorcycle: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rate_nbr: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsbbcrates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsbbcrates_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitsbbcrates_title_9de83ea0_like",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "chits2_chitsbbcrates_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
