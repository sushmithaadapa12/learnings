const express=require('express')
const dotenv=require("dotenv");
const bodyParser=require("body-parser")
dotenv.config();
const app=express()
const port= process.env.PORT;
const Router=require('./router/router')
const db=require("./models/index");


db.connection.sync(); 


app.use(bodyParser.urlencoded({limit:'50mb',extended: true,parameterLimit:500000}))


app.use(bodyParser.json({limit:'50mb'}))


Router(app);


app.listen(port, () => {
  console.log(`server runing at localhost:${port}`)
})
