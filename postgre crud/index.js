// Entry Point of the API Server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());


app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// const logger = (req,res, next)=>{
// 	console.log(req.query);
// 	next();
// }

const authenticateToken = (req,res,next)=>{
	const authheader = req.headers['authorization']; //jwt bearer token 
	// console.log(authheader);
	if(authheader !== undefined){
		jwtToken = authheader.split(' ')[1]; //[0] implies the bearer and 1 is token
		// console.log(jwtToken);
		if(jwtToken  == undefined){
			res.status(400);
			res.send('Invalid JWT Token');
		}else{
			jwt.verify(jwtToken,'sushmitha',async(error,payload)=>{
				if(error){
					res.status(401);
					res.send('Invalid token');
				}else{
					// console.log(payload);
					req.email = payload.email;
					console.log(req.email);
					next();
				}
			})
		}

	}
};

const db = require('./queries')  //require query functions into index.js

// console.log(db)
app.get('/get',authenticateToken,db.getusers ) // getting all users data

app.get('/singleuser/:id/',authenticateToken,db.singleuser)// getting sigle user from id from the url

app.post('/create',authenticateToken,db.newuser);// insert data in the database

app.delete('/delete/:id/',authenticateToken,db.deleteuser) //deleting data of user

app.put('/update/:id/',authenticateToken,db.updateuser); //updating data of user

app.post('/signup',db.adminsignup); //signup

app.post('/login',db.adminlogin); 

// student db apis
app.post('/adminsignup',db.adminsignups);

// Create a Server and run it on the port 3000
const server = app.listen(3005, ()=> {
	let host = server.address().address
	let port = server.address().port
	console.log('Starting the Server at the port 3000');
})
