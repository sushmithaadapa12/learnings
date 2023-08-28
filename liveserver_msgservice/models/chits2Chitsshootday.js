const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chits2_chitsshootday', {
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
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    send_artist_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    send_production_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    production_email_address: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    send_internal_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    internal_email_address: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    call_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    close_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    briefing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'briefing',
        key: 'briefing_id'
      },
      unique: "chits2_chitsshootday_chits_project_id_briefing_id_c79170ce_uniq"
    },
    chits_project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chits2_chitsproject',
        key: 'id'
      },
      unique: "chits2_chitsshootday_chits_project_id_briefing_id_c79170ce_uniq"
    },
    preset: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    preset_data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chits2_chitsshootday',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chits2_chitsshootday_briefing_id_key",
        unique: true,
        fields: [
          { name: "briefing_id" },
        ]
      },
      {
        name: "chits2_chitsshootday_chits_project_id_2b11e215",
        fields: [
          { name: "chits_project_id" },
        ]
      },
      {
        name: "chits2_chitsshootday_chits_project_id_briefing_id_c79170ce_uniq",
        unique: true,
        fields: [
          { name: "chits_project_id" },
          { name: "briefing_id" },
        ]
      },
      {
        name: "chits2_chitsshootday_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
