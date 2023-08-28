const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
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
        useUTC: false //-->Add this line. for reading from database to avoid UTC time zone
    }
});

const db = {};
db.emp = require("./emp")(dbConnection, Sequelize);
db.emp_dept = require("./emp_dept")(dbConnection, Sequelize);
db.connection = dbConnection;


module.exports = db;