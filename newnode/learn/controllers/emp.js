const db = require('../models/index');
const fs = require('fs');
const dbConfig = require('../config/db.config');
const path = require('path');
const { response } = require('express');
const apis = {
    emp: async(req,res)=>{
        try{
            let emp = await db.connection.query("SELECT * FROM emp",{
                type: db.connection.QueryTypes.SELECT
            })
            
            if(emp.length > 0){
                response = {
                    status:"success",
                    message: "Data fetched successfully",
                    data: emp
                }
                res.status(200).json(response);
            }
        }catch(err){
            console.log(err,"Error")
            response = {
                status:"error",
                message:"Unable to fetch the data",
                data:err
            }
            res.status(503).json(response)
        }
    }

}
module.exports={apis}