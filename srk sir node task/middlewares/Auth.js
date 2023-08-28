const bodyParser=require("body-parser");
const jwt = require('jsonwebtoken');

const verifyWebsiteAuthentication = (req, res, next) => {

        const authheader =req.headers["authorization"];  //jwt bearer token 
          // console.log(authheader);
        if(authheader == undefined){
          res.status(400);
            res.send('Auth token is required');
        }
        else{
            jwt.verify(authheader,'sushmitha',async(error,payload)=>{
              if(error){
                res.status(401);
                res.send('Invalid token');
              }else{
                // console.log(payload);
                req.email = payload.email;
                // console.log(req.email);
                next();
              }
            })
          }
        }
  module.exports={verifyWebsiteAuthentication}