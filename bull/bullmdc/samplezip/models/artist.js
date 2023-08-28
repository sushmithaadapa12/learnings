const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "artist",
    {
      artist_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      creation_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      period_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "office",
          key: "office_id",
        },
      },
      office_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_dance_skill",
          key: "skill_id",
        },
      },
      book_fee_deducted: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      background: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      actor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      model: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      search_exclude: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      pending: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      special_project: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      special_project_notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      firstname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      othername: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      stagename: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      gender: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      nationality: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      postcode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      homephone: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      workphone: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      pager: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      otherphone: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      own_transport: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vehicle: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      equity_no: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      bectu: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      spotlight_no: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      spotlight_pin_no: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      hair_colour: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_hair_colour",
          key: "hair_colour",
        },
      },
      hair_style: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      hair_length: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      eye_colour: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_eye_colour",
          key: "eye_colour",
        },
      },
      dress_size: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_dress_size",
          key: "dress_size",
        },
      },
      head_size: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      height: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      collar: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      chest: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      bra_size: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cup_size: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_cup_size",
          key: "cup_size",
        },
      },
      waist: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      trouser: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      inseem: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      hip: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      shoe: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      bank_dirty: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      bank_is_buildingsociety: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      bank_name: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      bank_rollno_o: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      bank_sortcode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      bank_account_name: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      bank_account: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      post_payadvice: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ni_no: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ni_exempt: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      passport_seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      children: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      animals: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      wardrobe: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      notes_public: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      notes_internal: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      piercings: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      tattoos: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      bank_rollno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      invite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      premium_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      login_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      login_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      prev_period_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "period",
          key: "period_id",
        },
      },
      prev_book_fee_deducted: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      book_fee_deducted_pending: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      prev_book_fee_deducted_pending: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      uniforms: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      notes_actor_internal: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      playing_age_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      playing_age_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      work_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: "artist_work_rating",
          key: "work_rating",
        },
      },
      tc_accepted: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      marketing_opt_out: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      under_bust: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      sleeve: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      measurement_lock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      account_lock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      has_children: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      has_animals: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      has_animals_dog: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      reg_seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      reg_review: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      reg_review_approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      reg_referral: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      other_job: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      other_job_title: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      promowork_opt_in: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      county_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_county",
          key: "county_id",
        },
      },
      nationality_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_nationality",
          key: "nationality_id",
        },
      },
      other_job_type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artist_other_job_type",
          key: "other_job_type_id",
        },
      },
      middlename: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      display_stagename: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ni_exempt_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      passport_no: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      showreel_href: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      ni_exempt_notify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      nino_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      last_verified: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      pref_contact: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "email",
      },
      password_hash: {
        type: DataTypes.STRING(72),
        allowNull: true,
      },
      crb_approved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      crb_approved_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      passport_approved_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      crb_approved_with_conv: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      uk_ireland_citizen: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      settlement_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rtw_share_code: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      passport_expiry_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      visa_expiry_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      visa_approval_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      visa_approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      visa_no: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      has_spotlight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      emergency_contact: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      new_ethnic_look_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ethnic_look_other_text: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      specific_others: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      disability: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      disability_reason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      check_ref_num: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "artist",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "artist_pkey",
          unique: true,
          fields: [{ name: "artist_id" }],
        },
      ],
    }
  );
};
