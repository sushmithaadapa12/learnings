// const express= require('express');
// const app = express();

// const multer = require('multer');
// const filestorage = multer.diskStorage({

// })
// const upload = multer({storage})

// var express = require('express');
// var app = express();
// var fs = require("fs");

// var bodyParser = require('body-parser');
// var multer  = require('multer');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/images/'}));

// app.get('/form.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "form.html" );
// })

// app.post('/file_upload', function (req, res) {
//    console.log(req.files.file.name);
//    console.log(req.files.file.path);
//    console.log(req.files.file.type);
//    var file = __dirname + "/" + req.files.file.name;
   
//    fs.readFile( req.files.file.path, function (err, data) {
//       fs.writeFile(file, data, function (err) {
//          if( err ) {
//             console.log( err );
//             } else {
//                response = {
//                   message:'File uploaded successfully',
//                   filename:req.files.file.name
//                };
//             }
         
//          console.log( response );
//          res.end( JSON.stringify( response ) );
//       });
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })

// const imageStorage = multer.diskStorage({
//    // Destination to store image     
//    destination: 'images', 
//      filename: (req, file, cb) => {
//          cb(null, file.fieldname + '_' + Date.now() 
//             + path.extname(file.originalname))
//            // file.fieldname is name of the field (image)
//            // path.extname get the uploaded file extension
//    }
// });


const express = require("express")
const multer = require("multer")

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const uploadStorage = multer({ storage: storage })

// Single file
app.post("/fileupload", uploadStorage.single("file"), (req, res) => {
  console.log(req.file)
  return res.send("Single file")
})
//Multiple files
// app.post("/upload/multiple", uploadStorage.array("file", 10), (req, res) => {
//   console.log(req.files)
//   return res.send("Multiple files")
// })

app.listen(8081 || process.env.PORT, () => {
  console.log("Server on...")
})