const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits_chitssubmission', {
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_artist_verified: {
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
    shoot_day_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits_chitsshootday',
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
    check_in_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits_chitsartistcheckin',
        key: 'id'
      }
    },
    check_in_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    wrap_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chits_chitssubmission',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits_chitssubmission_25e475bc",
        fields: [
          { name: "zope_briefing_id" },
        ]
      },
      {
        name: "chits_chitssubmission_2cc02599",
        fields: [
          { name: "check_in_id" },
        ]
      },
      {
        name: "chits_chitssubmission_59f6ab79",
        fields: [
          { name: "shoot_day_id" },
        ]
      },
      {
        name: "chits_chitssubmission_ca949605",
        fields: [
          { name: "artist_id" },
        ]
      },
      {
        name: "chits_chitssubmission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
