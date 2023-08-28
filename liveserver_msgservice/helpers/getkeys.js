// const db = require('../models/index');
// const conn = db.connection;
// const {QueryTypes} = require('sequelize');
const decryptFun=require('./encryptions');
const pool=require("../config/dbconnection").pool

async function appServiceKeys() {
    
    let awsKeys=await pool.query('select * from dummy_data');
    let accessKey=await decryptFun.decryptWithAES(awsKeys.rows[0].ak_id);
    let secretAccessKey = await decryptFun.decryptWithAES(awsKeys.rows[0].sak_name);
    let cfp_key = await decryptFun.decryptWithAES(awsKeys.rows[0].cfp_name);
    let region = 'eu-west-1'

    return {accessKey,secretAccessKey,cfp_key,region}
}

module.exports ={
    appServiceKeys
}
