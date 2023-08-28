const db = require("../models/index");
let messageModal = db.models.message;
let messageRecipient = db.models.message_recipient;
let message_recipient = db.models.message_recipient;
let artist = db.models.artist;
const conn = db.connection;
var pg = require("pg");
const dbConfig = require("../config/db.config");
const { QueryTypes } = require("sequelize");
const AWS = require("aws-sdk");
const keys = require("./getKeys");
const { now } = require("moment");
const dotenv = require("dotenv");
dotenv.config();
//Queue Implementation
const Queue = require("bull");
// const { REDIS_PORT, REDIS_URI } = require("../config/redisCredential");

const emailQueue = new Queue("emailQueue", {
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_URI,
  },
  concurrency: 5,
  stalledInterval: 30000,
});

/*  function name: nationalities 
    explaination :  inserting mails and text message content in message table
    author:gowtham
*/

const axios = require("axios");
const { URLSearchParams } = require("url");

// const apiKey = "NjE3MTUxNTA0MzRmNzU1NTY5NzAzOTZiMzQ1YTU0NDU="; // YOUR API KEY HERE
// const baseURL = "https://api.txtlocal.com";

const apiKey=process.env.apiKey
const baseURL=process.env.baseURL

const createMessage = async (sender, subject, body, system, enquiryId, userId, type) => {
  try {
    let options;
    // for text
    if (type == "text") {
      subject = null;
      sender = "";
    }

    // for Enquiry Bulk eMail
    if (enquiryId != null) {
      options = {
        type: type,
        user_id: userId,
        subject,
        body,
        sender,
        status: "new",
        enquiry_id: enquiryId,
        ts: now(),
        delivery_ts: now(),
      };
    }
    // for Individual email
    else if (type == "email") {
      options = {
        type: "email",
        user_id: 1,
        subject,
        body,
        sender,
        status: "new",
        ts: now(),
        delivery_ts: now(),
      };
    } else {
      options = {
        type: "text",
        user_id: 1,
        subject,
        body,
        sender,
        status: "new",
        ts: now(),
        delivery_ts: now(),
      };
    }
    let insertMessage = await messageModal.create(options, { raw: true });

    if (insertMessage.message_id) {
      return { status: 1, m_id: insertMessage.message_id };
    }
  } catch (error) {
    return {
      error,
      status: 0,
    };
  }
};

//for individual emails

const insertMessageRecipient = async (m_id, artist_id, role, type) => {
  let options;
  try {
    let lRole = role.toLowerCase();
    // for email
    if (type == "email") {
      if (lRole == "artist") {
        options = {
          message_id: m_id,
          artist_id,
        };
      } else {
        options = {
          message_id: m_id,
          manual: artist_id, //here artist_id is the email
        };
      }
    }
    // type=text
    else {
      if (lRole == "artist") {
        options = {
          message_id: m_id,
          artist_id,
        };
      } else {
        options = {
          message_id: m_id,
          manual: artist_id, //here artist_id is the Mobile Number
        };
      }
    }

    let messageRecipients = await messageRecipient.create(options, { raw: true });
    if (messageRecipients.message_id) {
      return { status: 1, m_id: messageRecipients.message_id };
    }
  } catch (error) {
    return {
      error,
      status: 0,
    };
  }
};

// for Bulk Enquiry Emails
const insertMessageRecipientBulk = async (m_id, data, userEmail, type) => {
  // console.log(m_id, data, userEmail, "msg recipients ");
  try {
    let messageRecipients;
    let options;

    // data.map(async (value)=>{

    for (i = 0; i < data.length; i++) {
      let value = data[i];

      if (value.enquiry_artist_id == null) {
        // console.log("null block");
        options = {
          message_id: m_id,
          artist_id: value.artist_id,
          manual: userEmail,
        };
        messageRecipients = await messageRecipient.create(options, { raw: true });
      } else {
        // console.log("else block");

        options = {
          message_id: m_id,
          artist_id: value.artist_id,
          enquiry_artist_id: value.enquiry_artist_id,
        };
        //   messageRecipients= await conn.query(`insert into message_recipient(message_id,artist_id,enquiry_artist_id) values (${m_id},${value.artist_id},'${value.enquiry_artist_id}')`)
        messageRecipients = await messageRecipient.create(options, { raw: true });
      }
      // console.log(messageRecipients, "messageRecipients");
    }

    //    })

    if (messageRecipients) {
      return { status: 1, m_id: messageRecipients.message_id };
    }
  } catch (error) {
    return {
      error,
      status: 0,
    };
  }
};

/*  function name: Login Email Auth Key 
    explaination :  Email to Login user for Authenticatio Key
    author: Surendra
*/
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

const listenerFun = (msgIds, type, title, payrollId) => {
  // console.log(msgIds, type, title, payrollId, "Hellooo type");
  if (type === "email" || type === "emailBulk" || type === "emailBulkShortlist") {
    id = parseInt(msgIds);
    const msgType = type == "email" ? "email" : type == "emailBulk" ? "bulkmail" : "bulkmailShortlist";
    sendMail(id, msgType);
  }

  if (type == "payrollNotify") {
    id = parseInt(msgIds);
    // console.log(id, "Dataaaaa");
    sendMail(id, "payrollNotifyEmail", payrollId);
  }

  if (type == "text" || type == "textBulk") {
    // console.log("Hello listner artistIds,enquiryId,userId,title,type");

    ids = parseInt(msgIds);
    const msgType = type == "text" ? "text" : "bulktext";
    let user = { ids: ids, type: msgType, type1: "textlocal" };
    if (type == "textBulk") {
      user["title"] = title;
      // emailQueue.add(user, { removeOnComplete: true });
    }

    emailQueue.add(user, { removeOnComplete: true });
  }
  if (type == "payrollTextBulk") {
    ids = parseInt(msgIds);
    let user = { ids: ids, type: "payrollTextBulk", type1: "payrollTextBulk", payrollId };
    emailQueue.add(user, { removeOnComplete: true });
  }
  if (type == "bankDetailsVerify") {
    id = parseInt(msgIds);
    // console.log(id, "Dataaaaa");
    //payrollid means array of artist ids
    sendMail(id, "bankDetailNotify", payrollId);
  }

  if (type == "retryEmial") {
    let ids = msgIds.split("*");
    ids.map((x, i) => {
      ids[i] = parseInt(x);
    });
    msgIds = ids;
    sendMail(msgIds, "retryEmial");
    // console.log(msgIds, "value1");
  } else if (type == "retryText") {
    let ids = msgIds.split("*");
    ids.map((x, i) => {
      ids[i] = parseInt(x);
    });
    msgIds = ids;
    let user = { ids: msgIds, type: "retryText", type1: "textlocal" };
    emailQueue.add(user, { removeOnComplete: true });
  }
};

const sendMail = async (id, bulk, payrollId) => {
  // for enquiry bulkmail

  if (bulk == "bulkmail") {
    let NotifyData = await conn.query(
      `SELECT artist.email, artist.artist_id, artist.firstname,message.subject,message_recipient.message_id,message_recipient.artist_id,message_recipient.manual,message_recipient.enquiry_artist_id FROM message join message_recipient on message.message_id=message_recipient.message_id join artist on message_recipient.artist_id=artist.artist_id where message.message_id=${id}`,
      { type: QueryTypes.SELECT }
    );
    let required = [];
    // console.log(NotifyData, "NotifyData");

    if (NotifyData.length > 0) {
      // console.log(NotifyData.length, "lengththhhhh");
      await NotifyData.map((x, i) => {
        x.subject = x.subject.split(":")[1];
        // console.log(x.subject, "x.subject");
        x.enquiry_artist_id = process.env.mlink + x.enquiry_artist_id;
        required.push({ Destination: { ToAddresses: [x.email] }, ReplacementTemplateData: `{ \"firstname\":\"${x.firstname}\", \"enquiry_mlink\":\"${x.enquiry_artist_id}\",\"artist_id\":\"${x.artist_id}\" ,\"title\":\"${x.subject}\"}` });
      });
      // console.log(required, "required");
      // sampleMail1('info@maddog2020casting.com','Mad Dog 2020 Artist Enquiry',required,NotifyData)
      let user = { from: "info@maddog2020casting.com", subject: "Mad Dog 2020 Artist Enquiry", required: required, NotifyData: NotifyData, type1: "sampleMail1" };
      emailQueue.add(user, { removeOnComplete: true });
    }
  }
  // for single Email
  else if (bulk == "email") {
    // console.log("check2");
    let options = {
      where: { message_id: id },
      include: [
        {
          model: message_recipient,
          attributes: ["message_id", "artist_id", "manual"],
          include: [
            {
              model: artist,
              attributes: ["email", "artist_id"],
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    };

    let mailData = await messageModal.findAll(options);
    // console.log(mailData, "mailData");

    let { subject, body, sender, message_recipients } = mailData[0];
    let mailsArr = [];

    if (mailData.length > 0) {
      mailData.map((record, i) => {
        let { subject, body, sender, message_recipients } = record;
        let { artist, manual } = message_recipients;
        // console.log(artist, "artist");
        if (artist.email) {
          mailsArr.push(artist.email);
        } else if (manual) {
          mailsArr.push(manual);
        }
      });
      // console.log(mailsArr, "aaa");
      // sampleMail(sender,mailsArr,subject,body,mailData,'normal')
      // mailQueue(sender,mailsArr,subject,body,mailData,'normal',)
      for (let i = 0; i < mailsArr.length; i++) {
        // console.log("Hellooo");
        let user = { from: sender, to: mailsArr[i], subject: subject, body: body, data: mailData[i], type: "normal", type1: "sampleMail" };
        emailQueue.add(user, { removeOnComplete: true });
      }
    }
  } else if (bulk == "bulkmailShortlist") {
    let options = {
      where: { message_id: id },
      include: [
        {
          model: message_recipient,
          attributes: ["message_id", "artist_id", "manual"],
          include: [
            {
              model: artist,
              attributes: ["email", "artist_id"],
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    };

    let mailData = await messageModal.findAll(options);

    let { subject, body, sender } = mailData[0];
    let mailsArr = [];
    if (mailData.length > 0) {
      mailData.map((record, i) => {
        let { message_recipients } = record;
        let { artist, manual } = message_recipients;
        // console.log(artist, "artist");
        if (artist.email) {
          mailsArr.push(artist.email);
        }
      });

      // let sampleData=[{ email: 'varalakshmi@krify.com', artist_id: 268977 } ,]
      const shortlistAccess = mailData.map((item) => {
        // console.log(`${JSON.stringify(item)} item data`);
        const {
          message_recipients: {
            artist: { email },
          },
        } = item;
        // console.log(`${email} email`);

        let user = { from: sender, to: email, subject: subject, body: body, data: item, type: "normal", type1: "sampleMail" };
        emailQueue.add(user, { removeOnComplete: true });
      });
      await Promise.all(shortlistAccess);
      // for(let i=0;i<mailsArr.length;i++){
      //   // console.log("Hellooo")
      //   let user={from:sender,to:mailsArr[i],subject:subject,body:body,data:mailData[i],type:'normal',type1:"sampleMail"}
      //   emailQueue.add(user,{removeOnComplete:true});
      // }
    }
  } else if (bulk == "retryEmial") {
    // console.log("sendMail retry");
    let NotifyData = await conn.query(
      `SELECT artist.email, artist.artist_id, artist.firstname,message_recipient.delivered,message.*,
      message_recipient.message_id,message_recipient.artist_id,message_recipient.manual,
      message_recipient.enquiry_artist_id 
      FROM message join message_recipient on message.message_id=message_recipient.message_id 
      join artist on message_recipient.artist_id=artist.artist_id 
      where message.message_id in ( ${id} )and message_recipient.delivered=false`,
      { type: QueryTypes.SELECT }
    );
    let static_temp;
    let dynamic_temp;
    // // console.log(NotifyData,"NotifyData")

    static_temp = NotifyData.filter((val) => {
      return val.enquiry_id == null;
    });

    dynamic_temp = NotifyData.filter((val) => {
      return val.enquiry_id != null;
    });
    // console.log(static_temp, "static");

    if (static_temp.length > 0) {
      static_temp.map((x, i) => {
        let { subject, body, sender } = static_temp[i];
        let static_temp_ids = [];

        // let mailId=x.
        // console.log(x.email);
        static_temp_ids.push(x.email);

        // sampleMail(sender,static_temp_ids,subject,body,NotifyData,'retrymode')

        let user = { from: sender, to: mailsArr[i], subject: subject, body: body, data: mailData[i], type: "retrymode", type1: "sampleMail" };
        emailQueue.add(user, { removeOnComplete: true });
      });
    }
    // // console.log(static_temp_ids,"static")

    if (dynamic_temp.length > 0) {
      // console.log("Goodddd");
      dynamic_temp.map((x, i) => {
        let required = [];
        x.subject = x.subject.split(":")[1];
        // console.log(x.subject, "x.subject");
        let type = "retry";
        x.enquiry_artist_id = process.env.mlink + x.enquiry_artist_id;

        required.push({ Destination: { ToAddresses: [x.email] }, ReplacementTemplateData: `{ \"firstname\":\"${x.firstname}\", \"enquiry_mlink\":\"${x.enquiry_artist_id}\",\"artist_id\":\"${x.artist_id}\" ,\"title\":\"${x.subject}\"}` });
        // sampleMail1('info@maddog2020casting.com','Mad Dog 2020 Artist Enquiry',required,dynamic_temp,type)
        let user = { from: "info@maddog2020casting.com", subject: "Mad Dog 2020 Artist Enquiry", required: required, NotifyData: dynamic_temp, type: type, type1: "sampleMail1" };
        emailQueue.add(user, { removeOnComplete: true });
      });
      // // console.log(required,"required")
    }

    // console.log(static_temp);
    // console.log(dynamic_temp);
  } else if (bulk == "payrollNotifyEmail") {
    let NotifyData = await conn.query(
      `SELECT artist.artist_id,artist.firstname||' '||artist.lastname  AS name,artist.email,artist.mobile,job.bacs,
    COALESCE((select to_char(payroll.date_paid,'DD/MM/YYYY') FROM payroll  WHERE payroll_id=${payrollId}  )) as date_paid_date,
    COALESCE((select to_char(date_paid,'DD Mon') as date_paid FROM payroll  WHERE payroll_id=${payrollId}  )) as date_paid   
    FROM zope_job AS job
    JOIN artist USING (artist_id)
    JOIN briefing USING (briefing_id)
    WHERE job.payroll_id=${payrollId}
    GROUP BY artist.artist_id,artist.firstname,artist.lastname,job.bacs
    ORDER BY artist.lastname,artist.firstname
    ;`,
      { type: QueryTypes.SELECT }
    );
    let required = [];
    // console.log(NotifyData, "NotifyData");

    if (NotifyData.length > 0) {
      // console.log(NotifyData.length, "lengthlengthlength");
      await NotifyData.map((x, i) => {
        NotifyData[i]["message_id"] = id;
        NotifyData[i]["pay_method"] = x.bacs ? " to your bank account" : " by cheque";
        // console.log(NotifyData[i], "NotifyData[i]");
        required.push({ Destination: { ToAddresses: [x.email] }, ReplacementTemplateData: `{ \"name\":\"${x.name}\", \"date_paid\":\"${x.date_paid}\",\"artist_id\":\"${x.artist_id}\" ,\"pay_method\":\"${x.pay_method}\"}` });
      });
      // console.log(required, "required");
      // console.log(NotifyData[0], "Sample Check");
      // // sampleMail1('info@maddog2020casting.com','Mad Dog 2020 Artist Enquiry',required,NotifyData)
      let user = { from: "info@maddog2020casting.com", subject: "You have been paid", required: required, NotifyData: NotifyData, type1: "payrollNotifyEmail" };
      emailQueue.add(user, { removeOnComplete: true });
    }
  } else if (bulk == "bankDetailNotify") {
    let options = {
      where: { message_id: id },
      include: [
        {
          model: message_recipient,
          attributes: ["message_id", "artist_id", "manual"],
          include: [
            {
              model: artist,
              attributes: ["email", "artist_id"],
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    };

    let mailData = await messageModal.findAll(options);
    // console.log(mailData, "mailData");

    let { subject, body, sender, message_recipients } = mailData[0];
    let mailsArr = [];

    if (mailData.length > 0) {
      mailData.map((record, i) => {
        let { subject, body, sender, message_recipients } = record;
        let { artist, manual } = message_recipients;
        // console.log(artist, "artist");
        if (artist.email) {
          mailsArr.push(artist.email);
        } else if (manual) {
          mailsArr.push(manual);
        }
      });
      // console.log(mailsArr, "checking list of ids");
      // sampleMail(sender,mailsArr,subject,body,mailData,'normal')
      // mailQueue(sender,mailsArr,subject,body,mailData,'normal',)
      for (let i = 0; i < mailsArr.length; i++) {
        // console.log("Hellooo");
        let user = { from: sender, to: mailsArr[i], subject: subject, body: body, data: mailData[i], type: "normal", type1: "sampleMail" };
        emailQueue.add(user, { removeOnComplete: true });
      }
    }
  }
};

const sampleMail1 = async (from, subject, destination, NotifyData, type) => {
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
      // console.log(data); // successful response
      if (type == "retry") {
        for (let i = 0; i < NotifyData.length; i++) {
          let updateMsg = await conn.query(`UPDATE message SET status='retry' WHERE message_id=${NotifyData[i].message_id} AND status='done'`);
          let sentSucess = await conn.query(`
          update message_recipient set delivered=true,delivery_error=NULL FROM message WHERE message_recipient.message_id=${NotifyData[i].message_id} AND  message.status='retry'`);
        }
      } else {
        // console.log("HEllooo Renuka");
        for (let i = 0; i < NotifyData.length; i++) {
          let updateMsg = await conn.query(`UPDATE message SET status='done' WHERE message_id=${NotifyData[i].message_id} AND status='new'`);

          let sentSucess = await conn.query(`update message_recipient set delivered=true where message_id=${NotifyData[i].message_id} AND artist_id=${NotifyData[i].artist_id}`);
        }
      }
    }
  });
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

const sendPartnerWelcomeMessage = async (id, type, title) => {
  // console.log(type, id, title, "check10");
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

    let getTextMsgData = await conn.query(textDetails, { type: QueryTypes.SELECT });

    // console.log(getTextMsgData, "getTextMsgData");

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
    // console.log("text");
    options = {
      where: { message_id: id },
      include: [
        {
          model: message_recipient,
          attributes: ["message_id", "artist_id", "manual", "enquiry_artist_id"],
          include: [
            {
              model: artist,
              attributes: ["email", "artist_id", "mobile"],
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    };

    messageData = await messageModal.findAll(options);
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
    // console.log(messageData, messageData.length, "messageData");
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

module.exports = {
  sampleMail,
  createMessage,
  insertMessageRecipient,
  listenerFun,
  sampleMail1,
  insertMessageRecipientBulk,
  sendPartnerWelcomeMessage,
  sampleMailPayroll,
  payrollSendPartnerWelcomeMessage,
};
