const express = require('express')
const app = express()
require("./queueProcessor")
const port = 3009

app.get('/', (req, res) => {
    console.log('hello');
res.send('Hello World!')
})

const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.HOST,
            database: process.env.DB,
            password: process.env.PASSWORD,
            port: 5432,
        });
        await pool.connect()
        const res = await pool.query('SELECT * FROM dummy_data')
//      console.log(res)
        await pool.end()
    } catch (error) {
     console.log(error)
    }
}
connectDb()


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})