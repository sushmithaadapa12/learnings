// const conn=require("./config/dbconnection").pool
// const AWS = require("aws-sdk");
// const keys = require("./getkeys");


const axios = require("axios");
const { URLSearchParams } = require("url");

const apiKey = "NjE3MTUxNTA0MzRmNzU1NTY5NzAzOTZiMzQ1YTU0NDU="; // YOUR API KEY HERE
const baseURL = "https://api.txtlocal.com";

const params = new URLSearchParams();

const sampletest = async()=>{
    let numberssArr = ['07438937258','07458197522']
if (numberssArr.length > 0) {
    params.append("apikey", apiKey);
    params.append("sender", "MadDog");
    params.append("numbers", numberssArr);
    params.append("message", 'Hello sir good evening, this is a test message from staging server.');
    // console.log(baseURL + "/send/?" + params.toString(), "check");
    await axios
       .get(baseURL + "/send/?" + params.toString())
       .then(async (res) => {
        console.log(res.data, "response");
        // let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${messageData[0].message_id} AND artist_id=${artist.artist_id}`);
       })
       .catch(async (err) => {
        console.log(err.toJSON());
        // let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${messageData[0].message_id} AND artist_id=${artist.artist_id}`);
       });
   }
}
sampletest();