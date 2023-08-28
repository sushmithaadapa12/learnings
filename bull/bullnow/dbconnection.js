const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.HOST,
                database: process.env.DB,
                password: process.env.PASSWORD,
                port: 5432,
            });



// const connectDb = async () => {
//     //     try {
//             
//     //  
//     //         await pool.connect()
//     //         const res = await pool.query('SELECT * FROM dummy_data')
//     //         console.log(res)
//     //         await pool.end()
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     }

module.exports={pool}