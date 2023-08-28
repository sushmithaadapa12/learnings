
const dotenv= require("dotenv"); 
dotenv.config();
module.exports = {
      HOST: process.env.HOST,
      USER: process.env.DB_USER,
      PASSWORD:process.env.PASSWORD,
      DB:process.env.DB,
      dialect:'postgres',
      // logging:false,
      pool: {
        max:parseInt(process.env.MAX),
        min:parseInt(process.env.MIN),
        acquire:process.env.ACQUIRE,//Acquire is nothing but Awaiting for connection
        idle: process.env.IDLE // DB idle after acquiring connection
      }
    };