const { application } = require('express');
const express= require('express');
const app = express();

// app.get('/',(request,response)=>{
//     response.send("Hello sushmitha welcome to my world <h1> Hello </h1> <b> How are you  </b>");
//     console.log(request);
//     console.log(response);
// })

//  date
// app.get('/date',(request,response)=>{
//     let date= new Date();
//     response.send(`todays date is ${date}`);
// })

// to get the html pages
app.get('/page',(request,response)=>{
    response.sendFile('./app.html',{root:__dirname});
    console.log(request);
})

app.listen(3001);