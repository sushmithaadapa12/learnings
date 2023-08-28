module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state:{
        type:Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      dateofregister: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    }, {
        tableName: 'users',
        freezeTableName: true , timestamps: false
     });
  
    return users;
  };