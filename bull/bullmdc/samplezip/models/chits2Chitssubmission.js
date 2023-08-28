const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitssubmission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    check_in_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    wrap_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_submitted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_verified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_artist_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    confirmation_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    signed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chits_basicrate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_accommodation: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_supp_performance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_early_call: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_meal_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_supp_service: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_other_expenses: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_overtime: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_holiday_credit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_travel_allowance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_fitting_fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_other_deductions: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_adjustment: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    chits_adjustment_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chits_dont_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    chits_dont_pay_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artist',
        key: 'artist_id'
      }
    },
    check_in_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits2_chitsartistcheckin',
        key: 'id'
      }
    },
    shoot_day_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits2_chitsshootday',
        key: 'id'
      }
    },
    zope_briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'briefing',
        key: 'briefing_id'
      }
    },
    chits_continuous_day: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    chits_night_shoot_broken_lunch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chits2_chitssubmission',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitssubmission_artist_id_3193b08f",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "chits2_chitssubmission_check_in_id_007357d0",
        fields: [
          { name: "check_in_id" },
        ]
      },
      {
        name: "chits2_chitssubmission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chits2_chitssubmission_shoot_day_id_929ebd4e",
        fields: [
          { name: "shoot_day_id" },
        ]
      },
      {
        name: "chits2_chitssubmission_zope_briefing_id_ff851654",
        fields: [
          { name: "zope_briefing_id" },
        ]
      },
    ]
  });
};
