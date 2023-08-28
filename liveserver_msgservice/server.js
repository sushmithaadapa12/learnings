const express = require('express')
const app = express()
require("./controllers/queueProcessor")
const port = 3009
const conn=require("./config/dbconnection").pool
const AWS = require("aws-sdk");
const keys = require("./helpers/getkeys");

app.get('/', (req, res) => {
    console.log('defautl message from dispatcher');
res.send('Message dispatcher started successfully');
})

app.listen(port, () => {
console.log(` Message dispatcher app listening on port ${port}`)
})

