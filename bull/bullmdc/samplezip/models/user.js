const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      access: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "shortlist",
          key: "shortlist_id",
        },
      },
      office_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: "artist_rating",
          key: "rating_id",
        },
      },
      company: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "Mad Dog Casting Ltd.",
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      pending: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      password_hash: {
        type: DataTypes.STRING(72),
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "user_pkey",
          unique: true,
          fields: [{ name: "user_id" }],
        },
      ],
    }
  );
};
