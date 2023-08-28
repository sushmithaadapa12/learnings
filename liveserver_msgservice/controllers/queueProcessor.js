const Queue = require('bull');
const sampleMail=require("./samplemail").sampleMail;
const sampleMail1=require("./samplemail").sampleMail1;
const sampleMailPayroll=require("./samplemail").sampleMailPayroll;
const payrollSendPartnerWelcomeMessage=require("./samplemail").payrollSendPartnerWelcomeMessage;
const sendPartnerWelcomeMessage=require("./samplemail").sendPartnerWelcomeMessage;

const path = require('path');
const EventEmitter = require('events');

// Construct the path to the file
const filePath = path.join(__dirname, '..', 'stagingapimdc', 'helpers', 'messenger.js');
console.log(filePath,'filepath');

// Use the filePath to access the file
const emailQueuestg = require(filePath).emailQueuestg;


emailQueuestg.process(
  async (job,done) => {
// Here you can access the job details using the 'job.data' property
console.log('Processing job:', job.data);
// console.log(job, "Job Details");
  try {
    // let{from,to,subject,body,data} = job.data
    if (job.data.type1 == "sampleMail") {
      console.log("samplemail calling")
      let from = job.data.from;
      let to = [job.data.to];
      let subject = job.data.subject;
      let body = job.data.body;
      let type = job.data.type;
      let data = [job.data.data];

      console.log(from, to, subject, body, data, "data format");
      await sampleMail(from, to, subject, body, data, type);
    } else if (job.data.type1 == "sampleMail1") {
      console.log("samplemail111 calling");
      let from = job.data.from;
      let required = [job.data.required];
      let subject = job.data.subject;
      let type = job.data.type;
      let NotifyData = job.data.NotifyData;
      await sampleMail1(from, subject, required, NotifyData, type);
      // if(type==''){

      // }
    } else if (job.data.type1 == "textlocal") {
      let ids = job.data.ids;
      let type = job.data.type;
      let title = job.data.title;
      // await sendPartnerWelcomeMessage(ids, type, title);

      if (type == "text") {
        await sendPartnerWelcomeMessage(ids, type);
      } else if (type == "bulktext") {
        console.log(ids, type, title,"ids, type, title ids, type, title")

        await sendPartnerWelcomeMessage(ids, type, title);
      } else if (type == "retryText") {
        await sendPartnerWelcomeMessage(ids, type);
      }
    } else if (job.data.type1 == "payrollNotifyEmail") {
      console.log(job.data, "dataCheck");
      let from = job.data.from;
      let required = [job.data.required];
      let subject = job.data.subject;
      let type = job.data.type;
      let NotifyData = job.data.NotifyData;
      await sampleMailPayroll(from, subject, required, NotifyData, type);
    } else if (job.data.type1 == "payrollTextBulk") {
      let ids = job.data.ids;
      let type = job.data.type;
      let payrollId = job.data.payrollId;
      await payrollSendPartnerWelcomeMessage(ids, type, payrollId);
    }
    done();
    await job.remove();
  } catch (err) {
    console.log(err);
    throw err;
  }
// ... Process the job and send the email

// Once the job is completed, you can remove it from the queue

});














// Create an event emitter for notifications
// const notifications = new EventEmitter();

// Event listener for jobAdded event
// notifications.on('jobAdded', (job) => {
// console.log('New job added to emailQueue:', job.data);

// // Process the emailQueue job
// emailQueuestg.process(
//   async (job,done) => {
// // Here you can access the job details using the 'job.data' property
// console.log('Processing job:', job.data);
// // console.log(job, "Job Details");
//   try {
//     // let{from,to,subject,body,data} = job.data
//     if (job.data.type1 == "sampleMail") {
//       console.log("samplemail calling")
//       let from = job.data.from;
//       let to = [job.data.to];
//       let subject = job.data.subject;
//       let body = job.data.body;
//       let type = job.data.type;
//       let data = [job.data.data];

//       console.log(from, to, subject, body, data, "data format");
//       await sampleMail(from, to, subject, body, data, type);
//     } else if (job.data.type1 == "sampleMail1") {
//       console.log("samplemail111 calling");
//       let from = job.data.from;
//       let required = [job.data.required];
//       let subject = job.data.subject;
//       let type = job.data.type;
//       let NotifyData = job.data.NotifyData;
//       await sampleMail1(from, subject, required, NotifyData, type);
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
//     // done();
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// // ... Process the job and send the email

// // Once the job is completed, you can remove it from the queue
// // await job.remove();
// });

// });

// Example of how to listen to notifications
// console.log('Listening to notifications...');

// Now you can use the 'messenger' module
// messenger.someFunction();
// const emailQueue = require("../devapimdc/helpers/messenger/emailQueue")


// Create a new instance of Bull queue
// const queue = new Queue('emailQueue', {
//   redis: {
//     host: 'localhost',
//     port: 6379,
//   },
// });



// const emailQueue = new Queue('emailQueue',

// {
//     redis: {
//       host: 'localhost',
//       port: 6379,
//     },
//   }
// );

// const emailQueue = new Queue('emailQueue', 'redis://localhost:6379');






// Get the job from the queue
// async function getEmailJob(jobId) {
//   try {
//     const job = await queue.getJob(jobId);
//     if (job) {
//       const emailData = job.data;
//       console.log('Email Data:', emailData);
//       // Process the email job here
//       // ...
//       let from = job.data.from;
//       let to = [job.data.to];
//       let subject = job.data.subject;
//       let body = job.data.body;
//       let type = job.data.type;
//       let data = [job.data.data];

//       console.log(from, to, subject, body, data, "data format");
//       await sampleMail(from, to, subject, body, data, type);
//       queue.process(emailQueueProcessor(job,done));
//     } else {
//       console.log('Job not found');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Call the function to get the email job by ID
// getEmailJob(3);



// const Queue = require("bull");
// console.log("hellooooo.....")
// // const { sampleMail, sampleMail1, sendPartnerWelcomeMessage, sampleMailPayroll, payrollSendPartnerWelcomeMessage } = require("../messenger");

// const emailQueue = new Queue("emailQueue", {
//   redis: {
//     port: process.env.REDIS_PORT,
//     host: process.env.REDIS_URI,
//   },
// });

// emailQueue.add({id:1,text:"hello"})

// // emailQueue.get()

const emailQueueProcessor = async (job) => {
  console.log(job, "Job Details");
  try {
    // let{from,to,subject,body,data} = job.data
    if (job.data.type1 == "sampleMail") {
      // console.log(job.data.to, "bull check");
      let from = job.data.from;
      let to = [job.data.to];
      let subject = job.data.subject;
      let body = job.data.body;
      let type = job.data.type;
      let data = [job.data.data];

      console.log(from, to, subject, body, data, "data format");
      await sampleMail(from, to, subject, body, data, type);
    } else if (job.data.type1 == "sampleMail1") {
      // console.log(job.data, "dataCheck");
      let from = job.data.from;
      let required = [job.data.required];
      let subject = job.data.subject;
      let type = job.data.type;
      let NotifyData = job.data.NotifyData;
      await sampleMail1(from, subject, required, NotifyData, type);
      // if(type==''){

      // }
    } else if (job.data.type1 == "textlocal") {
      let ids = job.data.ids;
      let type = job.data.type;
      let title = job.data.title;
      // await sendPartnerWelcomeMessage(ids, type, title);

      if (type == "text") {
        // await sendPartnerWelcomeMessage(ids, type);
      } else if (type == "bulktext") {
        await sendPartnerWelcomeMessage(ids, type, title);
      } else if (type == "retryText") {
        // await sendPartnerWelcomeMessage(ids, type);
      }
    } else if (job.data.type1 == "payrollNotifyEmail") {
      console.log(job.data, "dataCheck");
      let from = job.data.from;
      let required = [job.data.required];
      let subject = job.data.subject;
      let type = job.data.type;
      let NotifyData = job.data.NotifyData;
      await sampleMailPayroll(from, subject, required, NotifyData, type);
    } else if (job.data.type1 == "payrollTextBulk") {
      let ids = job.data.ids;
      let type = job.data.type;
      let payrollId = job.data.payrollId;
      await payrollSendPartnerWelcomeMessage(ids, type, payrollId);
    }
    done();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// queue.process(emailQueueProcessor())


emailQueuestg.on("completed", (job) => {
  // alreadySentEmails.add("the job", {
  //    jobId: job.id,
  //   // delete job after one week
  //   // delay: 1000 * 60 * 60 * 24 * 7,
  //   removeOnComplete: true
  // });
  console.log(job, "Job Done");
});
