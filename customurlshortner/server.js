const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {inserturl,geturl} = require('./controllers/urls.js');
const {Auth} = require('./Auth/auth.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'50mb',extended: true,parameterLimit:500000}))

app.use(bodyParser.urlencoded({limit:'50mb',extended: true,parameterLimit:500000}))
// app.use(multipart('form-data')); // support multipart

// parse application/json
app.use(bodyParser.json({limit:'50mb'}))

// allowing headers to avoid cros issue
app.use(function (req, res, next) {
  var allowedDomains=[
    "http://localhost:3000",
    "https://bu1is.krify.com",
    "http://localhost:3001",
    "http://10.1.10.75:3000",
    "http://10.1.10.75:3001"
  ];
  var origin=req.headers.origin;
  //  console.log(origin,"hello")
  if (allowedDomains.indexOf(origin)>-1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("X-Frame-Options", "sameorigin");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    
  );
  next();
});

app.post('/api/urls',Auth,inserturl);

app.get("/:shortUrl",geturl);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});