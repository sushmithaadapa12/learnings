const Queue = require("bull");
console.log("hellooooo.....")
// const { sampleMail, sampleMail1, sendPartnerWelcomeMessage, sampleMailPayroll, payrollSendPartnerWelcomeMessage } = require("../messenger");

const emailQueue = new Queue("emailQueue", {
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_URI,
  },
});

emailQueue.add({id:1,text:"hello"})

// emailQueue.get()

// const emailQueueProcessor = async (job, done) => {
//   // console.log(job.data, "Job Details");
//   try {
//     // let{from,to,subject,body,data} = job.data
//     if (job.data.type1 == "sampleMail") {
//       // console.log(job.data.to, "bull check");
//       let from = job.data.from;
//       let to = [job.data.to];
//       let subject = job.data.subject;
//       let body = job.data.body;
//       let type = job.data.type;
//       let data = [job.data.data];

//       // console.log(from, to, subject, body, data, "data format");
//     //   await sampleMail(from, to, subject, body, data, type);
//     } else if (job.data.type1 == "sampleMail1") {
//       // console.log(job.data, "dataCheck");
//       let from = job.data.from;
//       let required = [job.data.required];
//       let subject = job.data.subject;
//       let type = job.data.type;
//       let NotifyData = job.data.NotifyData;
//     //   await sampleMail1(from, subject, required, NotifyData, type);
//       // if(type==''){

//       // }
//     } else if (job.data.type1 == "textlocal") {
//       let ids = job.data.ids;
//       let type = job.data.type;
//       let title = job.data.title;
//       // await sendPartnerWelcomeMessage(ids, type, title);

//       if (type == "text") {
//         // await sendPartnerWelcomeMessage(ids, type);
//       } else if (type == "bulktext") {
//         await sendPartnerWelcomeMessage(ids, type, title);
//       } else if (type == "retryText") {
//         // await sendPartnerWelcomeMessage(ids, type);
//       }
//     } else if (job.data.type1 == "payrollNotifyEmail") {
//       console.log(job.data, "dataCheck");
//       let from = job.data.from;
//       let required = [job.data.required];
//       let subject = job.data.subject;
//       let type = job.data.type;
//       let NotifyData = job.data.NotifyData;
//       await sampleMailPayroll(from, subject, required, NotifyData, type);
//     } else if (job.data.type1 == "payrollTextBulk") {
//       let ids = job.data.ids;
//       let type = job.data.type;
//       let payrollId = job.data.payrollId;
//       await payrollSendPartnerWelcomeMessage(ids, type, payrollId);
//     }
//     done();
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

// emailQueue.process(emailQueueProcessor);

emailQueue.on("completed", (job) => {
  // alreadySentEmails.add("the job", {
  //    jobId: job.id,
  //   // delete job after one week
  //   // delay: 1000 * 60 * 60 * 24 * 7,
  //   removeOnComplete: true
  // });
  console.log(job, "Job Done");
});