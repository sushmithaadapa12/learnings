const db = require('../models/index');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { exit } = require('process');
const apis = {


    userreg : async(req, res) => {
    
        const userdetails = req.body;
        
        const {name,email,mobile,password,country,state,district,city,dateofregister}= userdetails;
        // console.log(userdetails)
        const finddup = `SELECT * FROM users WHERE email = '${email}' `;
        
        const rowCount = await db.connection.query(finddup, {
            type: db.connection.QueryTypes.SELECT})
       
        if(rowCount.length === 0){
            const createuser = `INSERT INTO  users (name,email,mobile,password,country,state,district,city,dateofregister) VALUES ('${name}', '${email}','${mobile}','${password}','${country}','${state}','${district}','${city}','${dateofregister}')`;
            const dbresponse = await db.connection.query(createuser);
            if(dbresponse){
                var mail=nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'sushmitha.a@krify.com', // Your email id
                        pass: 'Rajiadapa123@' // Your password
                    }
                });

                var mailOptions={
                    from: 'sushmitha.a@krify.com',
                    to: email,
                    subject: 'Dear'+name,
                    html: '<p> You are successfully  registered with us </p> <h1> Thank You</h1>'

                };

                mail.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        response={
                            status: error,
                            mesage: "Unable to send the mail",
                        }
                        res.status(200).json(response)
                    } else {
                        response={
                            status: "success",
                            mesage: "registration succesfull",
                        }
                        res.status(200).json(response)
                    }
                });
            }

        }else{
            res.status = 400;
            res.send('User already exists');
        }
        
    },
    
    login: async (req, res) => {
      
        const logdetails = req.body;
        const {email_mobile,password}= logdetails;

        const logquery = `SELECT * FROM users WHERE email='${email_mobile}' or mobile ='${email_mobile}'`;
        try {
            let userDetails = await db.connection.query( logquery,{
                type: db.connection.QueryTypes.SELECT
               
            });
        
            if (userDetails.length > 0) {
                
                if (userDetails[0].password == password) {
                    const payload = {email: email_mobile};
                    const jwtToken = jwt.sign(payload, 'sushmitha');
                    console.log(jwtToken);
                    response = {
                        status: "success",
                        token:jwtToken,
                        mesage: "user Details LoggedIn successfully",
                    }
                    res.status(200).json(response)
                } else {
                    response = {
                        status: "error",
                        mesage: "Plesse enter valid password",
                    }
                    res.status(200).json(response)
                }
            } else {
                response = {
                    status: "error",
                    mesage: "Please give Valid EmailId/Mobile",
                }
                res.status(200).json(response)
            }
        } catch (err) {
            console.log(err,"err");
            response = {
                status: "error",
                mesage: "Internal server error",
                error: err
            }
            res.status(500).json(response)
        }


    },

    
    filter: async (req, res) => {
        // console.log("jhello");
        const filters = req.query;

        const filterquery = `SELECT * FROM users `;
        try {
            let userDetails = await db.connection.query( filterquery,{
                type: db.connection.QueryTypes.SELECT
               
            });
            const filteredUsers = userDetails.filter(user => {
                let isValid = true;
                for (key in filters) {
                //   console.log(key, user[key], filters[key]);
                  isValid = isValid && user[key] == filters[key];
                }
                return isValid;
              });
            //   res.send(filteredUsers);
              response = {
                        status: "200",
                        mesage: "Hurray found some data :>)",
                        data:filteredUsers
                    }
                    res.status(200).json(response)
                }
            
         catch (err) {
            console.log(err,"err");
            response = {
                status: "error",
                mesage: "Internal server error",
                error: err
            }
            res.status(500).json(response)
        }


    },

    search: async (req, res) => {
        // console.log("jhello");
        const filters = req.query;

        const filterquery = `SELECT * FROM users `;
        try {
            let userDetails = await db.connection.query( filterquery,{
                type: db.connection.QueryTypes.SELECT
               
            });
            const filteredUsers = userDetails.find(user => {
                let isValid = true;
                for (key in filters) {
                //   console.log(key, user[key], filters[key]);
                  isValid = isValid && user[key] == filters[key];
                }
                return isValid;
              });
            //   res.send(filteredUsers);
              response = {
                        status: "200",
                        mesage: "Hurray found some data :>)",
                        data:filteredUsers
                    }
                    res.status(200).json(response)
                }
            
         catch (err) {
            console.log(err,"err");
            response = {
                status: "error",
                mesage: "Internal server error",
                error: err
            }
            res.status(500).json(response)
        }


    }
   
}

module.exports = {
    apis
}