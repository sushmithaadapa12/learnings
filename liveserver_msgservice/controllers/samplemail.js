const conn=require("../config/dbconnection").pool
const AWS = require("aws-sdk");
const keys = require("../helpers/getkeys");


const axios = require("axios");
const { URLSearchParams } = require("url");

const apiKey = "NjE3MTUxNTA0MzRmNzU1NTY5NzAzOTZiMzQ1YTU0NDU="; // YOUR API KEY HERE
const baseURL = "https://api.txtlocal.com";


const sampleMail = async (from, to, subject, body, mailData, mode) => {
    // console.log(from, to, subject, body, "sample mail check");
  
    // console.log(mailData, "mailDataaa");
    // console.log(mode, "mode ");
    // console.log(to, "to");
  
    // from = process.env.senderMail;
    from = from ? from : process.env.senderMail;
    let dataKeys = await keys.appServiceKeys();
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
const sampleMail1 = async (from, subject, destination, NotifyData, type) => {
  console.log(from, subject, destination, NotifyData, type,"praaaaaamssss")
    from = process.env.senderMail;
    // // console.log(destination[0]. Destination.ToAddresses,"destination")
    let dataKeys = await keys.appServiceKeys();
    const SES_CONFIG = {
      accessKeyId: dataKeys.accessKey,
      secretAccessKey: dataKeys.secretAccessKey,
      region: "eu-west-1",
    };
    const AWS_SES = new AWS.SES(SES_CONFIG);
    var params = {
      Source: from,
      // "ConfigurationSetName":"ConfigSet",
      Template: "MyTemplate",
      Destinations: destination[0],
      DefaultTemplateData: '{ "firstname":"friend", "enquiry_mlink":"unknown" ,"artist_id":"12454","title":"unknown" }',
    };
  
    console.log(params, params.Destinations, "required params now");
    AWS_SES.sendBulkTemplatedEmail(params, async function (err, data) {
      if (err) {
        // console.log(err, err.stack); // an error occurred
        for (let i = 0; i < NotifyData.length; i++) {
          let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${NotifyData[i].message_id} AND artist_id=${NotifyData[i].artist_id}`);
        }
      } else {
        console.log(data,'aws'); // successful response
        if (type == "retry") {
          for (let i = 0; i < NotifyData.length; i++) {
            let updateMsg = await conn.query(`UPDATE message SET status='retry' WHERE message_id=${NotifyData[i].message_id} AND status='done'`);
            let sentSucess = await conn.query(`
            update message_recipient set delivered=true,delivery_error=NULL FROM message WHERE message_recipient.message_id=${NotifyData[i].message_id} AND  message.status='retry'`);
          }
        } else {
          console.log("HEllooo Renuka",NotifyData);
          for (let i = 0; i < NotifyData.length; i++) {
            console.log(NotifyData[i], "checkkkkk");
            
            try {
                let data = await conn.query('SELECT * FROM dummy_data');
                console.log(data, "dataftata");
                
                let updateMsg = await conn.query(`UPDATE message SET status='done' WHERE message_id=${NotifyData[i].message_id} AND status='new'`);
                console.log(updateMsg, "updateMsg");
                
                let sentSuccess = await conn.query(`UPDATE message_recipient SET delivered=true WHERE message_id=${NotifyData[i].message_id} AND artist_id=${NotifyData[i].artist_id}`);
                console.log(sentSuccess, "sentSuccess");
            } catch (error) {
                console.error(error);
                // Handle the error appropriately (e.g., log, retry, or throw)
            }
            }
        }
      }
    });
  };



  const sendPartnerWelcomeMessage = async (id, type, title) => {
    console.log(type, id, title, "check10");
    const params = new URLSearchParams();
  
    let messageData;
    let options;
    let textDynamic = [];
    let textStatic = [];
    if (type == "retryText") {
      // console.log("Hello");
      let textDetails = `SELECT artist.email, artist.artist_id, artist.firstname,message_recipient.delivered,message.*,enquiry.title,artist.mobile,
        message_recipient.message_id,message_recipient.artist_id,message_recipient.manual,
        message_recipient.enquiry_artist_id 
        FROM message join message_recipient on message.message_id=message_recipient.message_id 
        join artist on message_recipient.artist_id=artist.artist_id 
        join enquiry on enquiry.enquiry_id = message.enquiry_id
        where message.message_id in ( ${id} )and message_recipient.delivered=false`;
  
      let getTextMsgData = await conn.query(textDetails);
  
      // console.log(getTextMsgData2, "getTextMsgData");
  
      if (getTextMsgData.length > 0) {
        for (let i = 0; i < getTextMsgData.length > 0; i++) {
          if (getTextMsgData[i].enquiry_id == null && getTextMsgData[i].mobile != null) {
            let numberssArr = [];
            numberssArr.push(getTextMsgData[i].mobile);
  
            // textStatic.push(getTextMsgData[i])
            params.append("apikey", apiKey);
            params.append("sender", "MadDog");
            params.append("numbers", numberssArr);
            params.append("message", `${body}`);
            // console.log(baseURL + "/send/?" + params.toString(), "check");
            await axios
              .get(baseURL + "/send/?" + params.toString())
              .then(async (res) => {
                // console.log(res);
                // let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${messageData[0].message_id} AND artist_id=${artist.artist_id}`)
  
                let updateMsg = await conn.query(`UPDATE message SET status='retry' WHERE message_id=${getTextMsgData[i].message_id} AND status='done'`);
                let sentSucess = await conn.query(`
            update message_recipient set delivery_error=NULL,delivered=true FROM message WHERE message_recipient.message_id=${getTextMsgData[i].message_id} AND  message.status='retry'`);
              })
              .catch(async (err) => {
                // console.log(err.toJSON());
                let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err} $$where message_id=${getTextMsgData[i].message_id} AND artist_id=${getTextMsgData[i].artist_id}`);
              });
          } else if (getTextMsgData[i].enquiry_id != null && getTextMsgData[i].mobile != null) {
            // console.log("Hellooooo Else if ");
  
            let numberssArr = [];
  
            let enquiry_mlink = process.env.mlink + getTextMsgData[i].enquiry_artist_id;
            let body = `${getTextMsgData[i].title}. Please reply ASAP via ${enquiry_mlink} or login in to your profile (${getTextMsgData[i].artist_id})`;
  
            if (getTextMsgData[i].mobile) {
              numberssArr.push(getTextMsgData[i].mobile);
            } else {
              numberssArr.push(getTextMsgData[i].manual);
            }
            if (numberssArr.length > 0) {
              const params = new URLSearchParams();
              params.append("apikey", apiKey);
              params.append("sender", "MadDog");
              params.append("numbers", numberssArr);
              params.append("message", `${body}`);
              // console.log(baseURL + "/send/?" + params.toString(), "check");
              await axios
                .get(baseURL + "/send/?" + params.toString())
                .then(async (res) => {
                  // console.log(res);
                  // let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${messageData[i].message_id} AND artist_id=${artist.artist_id}`)
  
                  let updateMsg = await conn.query(`UPDATE message SET status='retry' WHERE message_id=${getTextMsgData[i].message_id} AND status='done'`);
                  let sentSucess = await conn.query(`
                  update message_recipient set delivery_error=NULL,delivered=true FROM message WHERE message_recipient.message_id=${getTextMsgData[i].message_id} AND  message.status='retry'`);
                })
  
                .catch(async (err) => {
                  // console.log(err.toJSON());
                  let sentSucess = conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${getTextMsgData[i].message_id} AND artist_id=${getTextMsgData[i].artist_id}`);
                });
            }
          }
        }
      }
    } else {
      console.log("text");
      // options = {
      //   where: { message_id: id },
      //   include: [
      //     {
      //       model: message_recipient,
      //       attributes: ["message_id", "artist_id", "manual", "enquiry_artist_id"],
      //       include: [
      //         {
      //           model: artist,
      //           attributes: ["email", "artist_id", "mobile"],
      //         },
      //       ],
      //     },
      //   ],
      //   raw: true,
      //   nest: true,
      // };
  
      // messageData = await messageModal.findAll(options);


     
const sqlQuery = `
  SELECT 
    message.*,
    message_recipient.message_id,
    message_recipient.artist_id,
    message_recipient.manual,
    message_recipient.enquiry_artist_id,
    artist.email,
    artist.artist_id,
    artist.mobile
  FROM 
    message
  INNER JOIN 
    message_recipient
  ON 
    message.message_id = message_recipient.message_id
  INNER JOIN 
    artist
  ON 
    message_recipient.artist_id = artist.artist_id
  WHERE 
    message_recipient.message_id = ?;
`;

const replacements = [id]; // Adjust the replacements array as per your requirements

await conn.query(sqlQuery, replacements, (error, results) => {
  if (error) {
    console.error('Error executing SQL query:', error);
    return error;
  }

  const messageData = results.map((result) => {
    return {
      // Map the retrieved columns to the desired attributes of the result object
      // Adjust the attribute names as per your column names in the database
      message_id: result.message_id,
      artist_id: result.artist_id,
      manual: result.manual,
      enquiry_artist_id: result.enquiry_artist_id,
      email: result.email,
      artist_id: result.artist_id,
      mobile: result.mobile,
      // ... Include any other desired attributes
    };
  });

  console.log(messageData);
});

    }
  
    // // console.log(messageData,"mailData")
  
    if (type == "text") {
      let numberssArr = [];
      let { body, message_recipients } = messageData[0];
      let { artist, manual } = message_recipients;
      if (artist.mobile) {
        numberssArr.push(artist.mobile);
      } else if (manual) {
        // console.log(manual, "manual detatils");
        numberssArr.push(manual);
      } else {
      }
      if (numberssArr.length > 0) {
        params.append("apikey", apiKey);
        params.append("sender", "MadDog");
        params.append("numbers", numberssArr);
        params.append("message", `${body}`);
        // console.log(baseURL + "/send/?" + params.toString(), "check");
        await axios
          .get(baseURL + "/send/?" + params.toString())
          .then(async (res) => {
            // console.log(res.data, "response");
            let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${messageData[0].message_id} AND artist_id=${artist.artist_id}`);
          })
          .catch(async (err) => {
            // console.log(err.toJSON());
            let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${messageData[0].message_id} AND artist_id=${artist.artist_id}`);
          });
      }
    } else if (type == "bulktext") {
      console.log(messageData, messageData?.length, "messageData");
      if (messageData.length > 0) {
        for (let i = 0; i < messageData.length; i++) {
          let numberssArr = [];
          let { message_recipients } = messageData[i];
          let { artist, manual } = message_recipients;
          let enquiry_mlink = process.env.mlink + message_recipients.enquiry_artist_id;
          let body = `${title}. Please reply ASAP via ${enquiry_mlink} or login in to your profile (${artist.artist_id})`;
  
          if (artist.mobile) {
            numberssArr.push(artist.mobile);
          } else {
            numberssArr.push(manual);
          }
  
          // console.log(numberssArr, "numberssArr");
          if (numberssArr.length > 0) {
            const params = new URLSearchParams();
            params.append("apikey", apiKey);
            params.append("sender", "MadDog");
            params.append("numbers", numberssArr);
            params.append("message", `${body}`);
            // console.log(baseURL + "/send/?" + params.toString(), "check");
            await axios
              .get(baseURL + "/send/?" + params.toString())
              .then(async (res) => {
                // console.log(res);
                let updateMsg = await conn.query(`UPDATE message SET status='done' WHERE message_id=${messageData[i].message_id} AND status='new'`);
                let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${messageData[i].message_id} AND artist_id=${artist.artist_id}`);
              })
  
              .catch(async (err) => {
                // console.log(err);
                let sentSucess = conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${messageData[i].message_id} AND artist_id=${artist.artist_id}`);
              });
          }
        }
      }
    }
  };


  //Textlocal integration for Artist Paid Notify - Payroll in finance module

const payrollSendPartnerWelcomeMessage = async (id, type, payrollId) => {
  // console.log(type, id, payrollId, "check10");

  let getTextMsgData = await conn.query(
    `SELECT artist.artist_id,artist.firstname||' '||artist.lastname  AS name,artist.email,artist.mobile,job.bacs,
  COALESCE((select to_char(payroll.date_paid,'DD/MM/YYYY') FROM payroll  WHERE payroll_id=${payrollId}  )) as date_paid_date,
  COALESCE((select to_char(payroll.date_paid,'DD Mon')  FROM payroll  WHERE payroll_id=${payrollId}  )) as date_paid    
  FROM zope_job AS job
  JOIN artist USING (artist_id)
  JOIN briefing USING (briefing_id)
  WHERE job.payroll_id=${payrollId}
  GROUP BY artist.artist_id,artist.firstname,artist.lastname,job.bacs
  ORDER BY artist.lastname,artist.firstname
  ;`,
    { type: QueryTypes.SELECT }
  );
  const params = new URLSearchParams();

  // let messageData;
  // let options;
  // let textDynamic = [];
  // let textStatic = [];
  if (type == "payrollTextBulk") {
    for (let i = 0; i < getTextMsgData.length; i++) {
      getTextMsgData[i]["message_id"] = id;
      getTextMsgData[i]["pay_method"] = getTextMsgData[i]["bacs"] ? " to your bank account" : " by cheque";
      if (getTextMsgData[i].mobile != null) {
        let numberssArr = [];
        numberssArr.push(getTextMsgData[i].mobile);
        let body = `Hi! You will be paid by Mad Dog on ${getTextMsgData[i].date_paid} ${getTextMsgData[i].pay_method}. Your remittance advice is available online.`;
        // textStatic.push(getTextMsgData[i])
        params.append("apikey", apiKey);
        params.append("sender", "MadDog");
        params.append("numbers", numberssArr);
        params.append("message", `${body}`);
        // console.log(baseURL + "/send/?" + params.toString(), "check");
        await axios
          .get(baseURL + "/send/?" + params.toString())
          .then(async (res) => {
            // console.log(res);
            // let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${messageData[0].message_id} AND artist_id=${artist.artist_id}`)

            let sentSucess = await conn.query(`
      update message_recipient set delivery_error=NULL,delivered=true FROM message WHERE message_recipient.message_id=${getTextMsgData[i].message_id} AND  artist_id=${getTextMsgData[i].artist_id}`);
          })
          .catch(async (err) => {
            // console.log(err.toJSON());
            let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err} $$where message_id=${getTextMsgData[i].message_id} AND artist_id=${getTextMsgData[i].artist_id}`);
          });
      }
    }
  }
};

// AWS Email Service Integration for Artist Paid Notify- Payroll  in Finance module

const sampleMailPayroll = async (from, subject, destination, NotifyData, type) => {
  from = process.env.senderMail;
  // // console.log(destination[0]. Destination.ToAddresses,"destination")
  let dataKeys = await keys.appServiceKeys();
  const SES_CONFIG = {
    accessKeyId: dataKeys.accessKey,
    secretAccessKey: dataKeys.secretAccessKey,
    region: "eu-west-1",
  };
  const AWS_SES = new AWS.SES(SES_CONFIG);
  var params = {
    Source: from,
    // "ConfigurationSetName":"ConfigSet",
    Template: "ArtistPaidPayrollNotify",
    Destinations: destination[0],
    DefaultTemplateData: '{ "name":"friend", "date_paid":"unknown" ,"artist_id":"12454","pay_method":"unknown" }',
  };
  AWS_SES.sendBulkTemplatedEmail(params, async function (err, data) {
    if (err) {
      // console.log(err, err.stack); // an error occurred
      for (let i = 0; i < NotifyData.length; i++) {
        let sentSucess = await conn.query(`update message_recipient set delivery_error =$$${err}$$ where message_id=${NotifyData[i].message_id} AND artist_id=${NotifyData[i].artist_id}`);
      }
    } else {
      for (let i = 0; i < NotifyData.length; i++) {
        let updateMsg = await conn.query(`UPDATE message SET status='done' WHERE message_id=${NotifyData[i].message_id} AND status='new'`);

        let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${NotifyData[i].message_id} AND artist_id=${NotifyData[i].artist_id}`);
      }
    }
  });
};
  



module.exports={sampleMail,sampleMail1,sampleMailPayroll,payrollSendPartnerWelcomeMessage,sendPartnerWelcomeMessage}