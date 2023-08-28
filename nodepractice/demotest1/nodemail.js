var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sushmitha.a@krify.com',
    pass: 'Rajiadapa123@'
  }
});

var mailOptions = {
  from: 'sushmitha.a@krify.com',
  to: 'rajiadapa67@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'  //html content also we can write here haha
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {   
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});