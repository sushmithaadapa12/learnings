const dbConfig = require("../config/dbconfig.js");
const Sequelize = require("sequelize");
// import sideMenu from './sideMenu'
const dbConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
    logging:false,
      dialectOptions: {
      useUTC: false // -->Add this line. for reading from database to avoid UTC time zone
      }
  });
  
const db = {};
db.admin = require("./users")(dbConnection, Sequelize);

db.connection = dbConnection;


module.exports = db;



