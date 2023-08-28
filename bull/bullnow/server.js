const express = require('express')
const app = express()
require("./queueProcessor")
const port = 3009
const conn=require("./dbconnection").pool
const AWS = require("aws-sdk");
const keys = require("./getkeys");

app.get('/hello', (req, res) => {
    console.log('hello');
res.send('Hello World!')
})

let data=async()=>{
  let values=await conn.query('SELECT * FROM dummy_data')
//   console.log(values)
}
// console.log(data,"dataaa")
data()


const sampleMail = async (from, to, subject, body, mailData, mode) => {
    // console.log(from, to, subject, body, "sample mail check");
  
    // console.log(mailData, "mailDataaa");
    // console.log(mode, "mode ");
    // console.log(to, "to");
  
    // from = process.env.senderMail;
    from = from ? from : process.env.senderMail;
    let dataKeys = await keys.appServiceKeys();
    // console.log(dataKeys);
    const SES_CONFIG = {
      accessKeyId: dataKeys.accessKey,
      secretAccessKey: dataKeys.secretAccessKey,
      region: "eu-west-1",
    };
    const AWS_SES = new AWS.SES(SES_CONFIG);
    var params = {
      Destination: {
        /* required */ ToAddresses: to,
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: body,
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
      Source: from /* required */,
      ReplyToAddresses: [from],
    };
    AWS_SES.sendEmail(params, async (err, data) => {
      if (err) {
        for (let i = 0; i < mailData.length; i++) {
          // console.log();
          let artistId = mode == "normal" ? mailData[i].message_recipients.artist_id : mailData[i].artist_id;
          let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${mailData[i].message_id} AND artist_id=${artistId}`);
        }
      } else {
        for (let i = 0; i < mailData.length; i++) {
          let status = mode == "normal" ? "done" : "retry";
          let artistId = mode == "normal" ? mailData[i].message_recipients.artist_id : mailData[i].artist_id;
          let updateMsg = await conn.query(`UPDATE message SET status='${status}' WHERE message_id=${mailData[i].message_id} AND status='new'`);
  
          let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${mailData[i].message_id} AND artist_id=${artistId}`);
        }
      }
    });
  };


sampleMail('info@maddog2020casting.com',['anand@krify.com'],'hello welcome','hello anandh all the best',[ {
    email: 'anand@krify.com',
    artist_id: 268224,
    firstname: 'Gowthami Bhavana',
    subject: 'bull_checking',
    message_id: 1800897,
    manual: null,
    enquiry_artist_id: 'https://mdcdev.krify.com/enquiryTemplate/7e8faa2fff25'
   }])

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})