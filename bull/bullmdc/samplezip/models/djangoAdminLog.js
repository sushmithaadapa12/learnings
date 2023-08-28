const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_admin_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    object_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    object_repr: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    action_flag: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    change_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'django_admin_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "django_admin_log_417f1b1c",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "django_admin_log_e8701ad4",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "django_admin_log_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
