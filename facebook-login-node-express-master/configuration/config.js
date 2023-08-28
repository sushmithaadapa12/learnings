const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  /*
   * This file contains the configurations information of Twitter login app.
   * It consists of Twitter app information, database information.
   */

  facebook_api_key: "641802277627323",
  facebook_api_secret: "d81162c6db5c39a73e27e7e31a5cfcc8",
  callback_url: "http://localhost:3000/auth/facebook/callback",
  use_database: false,
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

