const dotenv= require("dotenv"); 
dotenv.config();
const pg = require('pg');

const pool = new pg.Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    database: process.env.database,
    port: 5432
});
module.exports = {pool};

