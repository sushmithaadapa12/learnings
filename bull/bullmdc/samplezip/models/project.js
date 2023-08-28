const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "project",
    {
      project_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: "shortlist",
          key: "shortlist_id",
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      production_company_old: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      type_old: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ni_deduct: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      invoice_address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      contact_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      contact_email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      contact_mobile: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      contact_phone: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      invoice_company_old: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "project_type",
          key: "type_id",
        },
      },
      discount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      credit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      budget_mandays: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      budget_dayrate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      production_company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "client_company",
          key: "company_id",
        },
      },
      invoice_company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "client_company",
          key: "company_id",
        },
      },
      job_ref: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      office_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      dbs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      shortlist_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "shortlist",
          key: "shortlist_id",
        },
      },
      shortlist: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      no_show_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "project",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "project_company",
          fields: [{ name: "production_company_old" }],
        },
        {
          name: "project_invoice_company",
          fields: [{ name: "invoice_company_old" }],
        },
        {
          name: "project_manager",
          fields: [{ name: "manager_id" }],
        },
        {
          name: "project_pkey",
          unique: true,
          fields: [{ name: "project_id" }],
        },
      ],
    }
  );
};
