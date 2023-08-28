const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('division_attachment_tag', {
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_access',
        key: 'access'
      },
      unique: "division_attachment_tag_division_id_key"
    },
    tag: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "division_attachment_tag_division_id_key"
    },
    attachment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'project_id'
      }
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acl_artist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    acl_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    acl_artist_upload: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'division_attachment_tag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "division_attachment_tag_division_id_key",
        unique: true,
        fields: [
          { name: "division_id" },
          { name: "tag" },
        ]
      },
      {
        name: "division_attachment_tag_pkey",
        unique: true,
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
};
