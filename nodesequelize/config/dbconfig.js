const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
// console.log(process.env.PASSWORD,process.env.USER);
const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,'Krify@123',{
    host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable logging SQL queries
});

// Test the connection
(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
  