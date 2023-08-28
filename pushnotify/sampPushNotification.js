const FCM = require('fcm-node');
const apn = require('apn');
const fs = require('fs');
const path  = require('path');

const androidPush = (deviceID, title, message, type, bookingId, pushType) => {
    let serverKey = "AAAAnocFJeA:APA91bEAnPWAOc5IHfdUxi9YSIkl8EKK8g1aiHsp2o21_TZKGdqvE5Fd1fcxxQ9IXM_1stvGyM-UfGsCB0qhBZN2AO1mFvyksWwngarJiGjrb7ylGfG-HFvlDC563wUUbTdi1lIjpqER";
    // if(pushType == 1) //driver server key
    // { 
    //     serverKey = process.env.DRIVERSERVERKEY;
    // }
    // else//user server key
    // {
    //     serverKey = process.env.USERSERVERKEY;
    // }
    // // console.log(serverKey);return;

    const currentDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Calcutta',
      });
    currentDate.replace(",", "");
    var fcm = new FCM(serverKey);

    var message = {        
        to: deviceID,
      
        data:{           //you can send only notification or only data(or include both)   
            title: title,
            body: {title,
                message,
                // type,
                // bookingId,
                // currentDate
            }
        }
    }
    fcm.send(message, function (err, response) {
        if (err) {
            console.log(err)
            console.log("Something has gone wrong!");
            return 0;
        } else {
            console.log(response);
            return 1;
        }
    })
}
androidPush(' eFsYdtjRTS6_fhpoPuWj9L:APA91bE6iLhEN2J8IQEdZ2UKTi7SqKUDF9mcpB89z88kTphvk3YuaU92NonoeeFXACj-QIcaddsgewPrTqZ17mNhn8p3cHK1CUFHOtQF1SbQZDq0zhV1xlXhoNDEQGV_8klObf3LZrs8',"SAMPLE PUSH","TRYING TO SEND YOU SAMPLE PUSH NOTIFICATION")


deviceID=' eFsYdtjRTS6_fhpoPuWj9L:APA91bE6iLhEN2J8IQEdZ2UKTi7SqKUDF9mcpB89z88kTphvk3YuaU92NonoeeFXACj-QIcaddsgewPrTqZ17mNhn8p3cHK1CUFHOtQF1SbQZDq0zhV1xlXhoNDEQGV_8klObf3LZrs8'

const iosPush= (deviceID, title, message, type, bookingId,pushMode) =>{

    // if(pushMode == 1)
    // {
        environment = true; //production
    // }
    // else
    // {
    //     environment = false; //sandbox
    // }

    let apnProvider = new apn.Provider({
        token: {
            key: fs.readFileSync(path.resolve(__dirname + '/AuthKey_4CJVP4F6PW.p8')),
            keyId: "4CJVP4F6PW",
            teamId: "SLM4X3ZDUN"
          },
          production: environment
    })
    // console.log(apnProvider);
    let note = new apn.Notification();
 
    note.alert = {
        title,
        body: message,
    }
    note.topic = "com.Maddogextras ";
    // note.topic = "com.krify.connectconsult.user";
    note.mutableContent = 1;
    note.payload = {
            message
    }
    note.collapseId = bookingId;
    note.aps['content-available'] = 1;
    apnProvider.send(note, deviceID).then((response) => {
        if (response.failed.length > 0) {
        console.log('Error sending push notification:');
        response.failed.forEach((failure) => {
            console.log(`\tDevice: ${failure.device}`);
            console.log(`\tStatus: ${failure.status}`);
            console.log(`\tResponse:`);
            console.dir(failure.response); // Use console.dir() to log the response object
            const error = failure.response;
            const errorMessage = error['errorMessage'];
            console.log(`${errorMessage}`);
        });
        } else {
        console.log('Push notification sent successfully');
        }
    }).catch((error) => {
        console.log('Error sending push notification:', error);
    });
    
}
iosPush('4c0ff368117e1e1592fbbcf09d0310646d61d523d820055cdbc18fd2173bf80c','hello','how are you',)
module.exports={
    androidPush,
    iosPush
}