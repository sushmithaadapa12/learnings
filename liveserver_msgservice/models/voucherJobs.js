const db = require('../models/index')
const conn = db.connection
const{QueryTypes} = require('sequelize')

    /*  function name: getJobsWithVouchers
        explaination : To get Jobs associated with Production from the database.
        author : Veeranna
    */
   let getjobsWithVouchers=async(req,res)=>{
    let briefing_id = parseInt(req.params.briefingId);
    try{
        let query=`SELECT zope_job.*,artist.firstname||' '||artist.lastname AS name,job_state.name AS state,period.commission AS period_commission
        FROM zope_job 
        JOIN artist ON (zope_job.artist_id = artist.artist_id)
        JOIN job_state ON (zope_job.state_id = job_state.state_id)
        LEFT JOIN period ON (artist.period_id = period.period_id)
        WHERE zope_job.briefing_id='${briefing_id}' AND (zope_job.state_id < 7 OR zope_job.state_id > 11)
        ORDER BY artist.lastname,artist.firstname;`
        vouchersJobsData=await conn.query(query,{
            type: QueryTypes.SELECT
        })
        if(vouchersJobsData.length>0){
            let response = {
                status: 1,
                message: "Details fetched successfully",
                data: vouchersJobsData
            }
            res.status(200).json(response);
        }
        else{
            let response = {
                status: 0,
                message: "No data found",
                data: []
            }
            res.status(200).json(response);
        }
    }
    catch(error){
        console.log(error,"error")
        let response = {
            status: 0,
            message: "Something went wrong",
            data: []
        }
        res.status(500).json(response);
    }
   }
   module.exports = {getjobsWithVouchers}