const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const models = require("./init-models");

const dbConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  quoteIdentifiers: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  // logging:false,
  dialectOptions: {
    useUTC: true, // -->Add this line. for reading from database
  },
});
let tableModels = models(dbConnection);
//   console.log(tableModels)
dbConnection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.connection = dbConnection;
db.models = tableModels;
module.exports = db;
