const Pool = require('pg').Pool;
	const bcrypt = require('bcrypt');
const { response } = require('express');
const jwt = require('jsonwebtoken');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'sushmitha',
	password: 'Krify@123',     
	dialect: 'postgres',
	port: 5432
}); 


//pool connection 
pool.connect((err, client, release) => {
	if (err) {
		return console.error(
			'Error acquiring client', err.stack)
	}
	client.query('SELECT NOW()', (err, result) => {
		release()
		if (err) {
			return console.error(
				'Error executing query', err.stack)
		}
		console.log("Connected to Database !")
	}) 
})

  //admin login function
  const adminlogin = async(req, res) => {
    
    const logdetails = req.body;
    const {email,password}= logdetails;
	const logincred = `SELECT * FROM admin WHERE email='${email}'`;
	const quereydetails = await pool.query(logincred);
    // console.log(quereydetails.rows[0].password);
    if(quereydetails.rowCount == 0){
        res.status(400);
        res.send('invalid credentails');
    } else{
       const ispassmatch = await bcrypt.compare(password,quereydetails.rows[0].password);
    //    console.log(ispassmatch);
        if(ispassmatch == true){
			const payload = {email: email};
			const jwtToken = jwt.sign(payload, 'sushmitha');
			console.log(jwtToken);
			res.send({jwtToken}) //authorization header lo store cheyyali e token ni
            // res.send('loginsucess');
        }else{
            res.status(400);
            res.send('invalid password');
        }
    }
    
}

//admin signup function 
const adminsignup = async(req, res, next) => {
    
    const admindetails = req.body;
	// console.log(admindetails);
    const {name,email,password,phonenumber}= admindetails;
    const hashedpassword = await bcrypt.hash(req.body.password,10);
	
    const finddup = `SELECT * FROM admin WHERE email = '${email}'`;
    const {rowCount} = await pool.query(finddup);
    console.log(rowCount);
    if(rowCount === 0){
        const createuser = `INSERT INTO  admin (name, email, phonenumber,password)
        VALUES ('${name}', '${email}', '${phonenumber}','${hashedpassword}')`;
        const dbresponse = await pool.query(createuser);
        res.send("Created new user");
    }else{
        res.status = 400;
        res.send('User already exists');
    }
	
}
const adminsignups = async(req, res, next) => {
    
    const admindetails = req.body;
	// console.log(admindetails);
    const {name,email,password,jwtToken}= admindetails;
    const hashedpassword = await bcrypt.hash(req.body.password,10);
	
    const finddup = `SELECT * FROM admint WHERE email = '${email}'`;
    const {rowCount} = await pool.query(finddup);
    if(rowCount === 0){
		const payload = {email: email};
			const jT = jwt.sign(payload, name);
			// admindetails['jwtToken']=jT;
        const createuser = `INSERT INTO  admint (name, email,password,token)
        VALUES ('${name}', '${email}','${hashedpassword}','${jT}')`;
        const dbresponse = await pool.query(createuser);
        if(dbresponse){
			res.send("Yahooo ! Created new user");
		}
		else{
			res.send("Invalid credentials");
		}
    }else{
        res.status = 400;
        res.send('User already exists');
    }
	
}


// function for get user
const getusers = async(req, res) => {
	// console.log(req);
	// console.log('Inside get books api');
	const getQuery = `SELECT  * FROM crud`;
	const getbooks = await pool.query(getQuery);
	// console.log(getbooks);
	res.send(getbooks.rows);
}

//function for single user
const singleuser =(req, res, next) => {
	const {id} = req.params;
    console.log(id);
	pool.query(`Select * from crud WHERE id='${id}' ;`)
    .then(testData => {
			 res.send(testData.rows);
		})
}

//function for newuser
const newuser = async(req, res) => {
    
    const userdetails = req.body;
	console.log(userdetails);
    const {name,email,password,phonenumber}= userdetails;
    // const hashedpassword = bcrypt.hash(password,10)
	
	let db = await pool.query(`INSERT INTO  crud (name, email, password,phonenumber)
    VALUES ('${name}', '${email}', '${password}','${phonenumber}');`)
    
	if(db){
		res.send('Insertion sucessfull');
	}else{
		res.send("insertion failed");
	}
}

// function for delete user

const deleteuser = (req, res) => {
	const {id} = req.params;
    console.log(id);
	pool.query(`DELETE FROM public.crud WHERE id=${id} ;`)
    .then(testData => {
			console.log(testData.rowCount);
			// console.log(testData);
			if(testData.rowCount==0){
				res.send('user not exist in the db'); 
			}
			 res.send('deleted successfully');
		})
}

//function for updating user 
const updateuser = (req, res,next) => {
	const {id} = req.params;
    console.log(id);
	const { name, email } = req.body;
	console.log(name,email);

	pool.query( `UPDATE crud SET name = '${name}', email = '${email}' WHERE id = ${id}`)
    .then(testData => {
			console.log(testData.rowCount);
			// console.log(testData);
			if(testData.rowCount==0){
				res.send('already updated'); 
			}
			 res.send(' succesfully successfully');
		})
  }


  module.exports= {
    adminlogin,
    getusers,
    singleuser,
    newuser,
    deleteuser,
    updateuser,
    adminsignup,
    adminsignups
  }
