const db = require("../models/index");
let artist = db.models.artist;
let user = db.models.user;
let messageRecipient = db.models.message_recipient;
let enquiry_artist = db.models.enquiry_artist;
let template = require("./enquiry").artistEnquiry;
const sequelize = require("sequelize");
const Op = sequelize.Op;

const conn = db.connection;
const { QueryTypes } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();
const helpers = require("./messenger");
const { listenerFun } = require("./messenger");

const bulkNotifyData = async (req, res) => {
  let { artistIds, enquiryId, userId, title, type } = req.body;
  console.log(artistIds, enquiryId, userId, title, type, "artistIds,enquiryId,userId,title,type");

  try {
    let userEmail = await user.findAll({ where: { user_id: userId }, attributes: ["email"], raw: true });

    let NotifyData = await conn.query(
      `SELECT artist.email, artist.mobile,artist.artist_id, artist.firstname, enquiry_artist.enquiry_artist_id FROM artist JOIN  enquiry_artist ON artist.artist_id = enquiry_artist.artist_id WHERE ( artist.artist_id IN (${artistIds}) AND  enquiry_id = ${enquiryId} and exclude=false) `,
      { type: QueryTypes.SELECT }
    );
    let email = [];
    let text = [];
    if (NotifyData.length > 0) {
      for (let i = 0; i < NotifyData.length; i++) {
        if (type == "auto") {
          if (NotifyData[i].email) {
            email.push({ email: NotifyData[i].email, artistId: NotifyData[i].artist_id, enquiryArtistId: NotifyData[i].enquiry_artist_id });
          } else {
            text.push({ email: NotifyData[i].email, artistId: NotifyData[i].artist_id, enquiryArtistId: NotifyData[i].enquiry_artist_id, mobile: NotifyData[i].mobile });
          }
        } else if (type == "email") {
          email.push({ email: NotifyData[i].email, artistId: NotifyData[i].artist_id, enquiryArtistId: NotifyData[i].enquiry_artist_id });
        } else {
          email.push({ email: NotifyData[i].email, artistId: NotifyData[i].artist_id, enquiryArtistId: NotifyData[i].enquiry_artist_id });
          text.push({ email: NotifyData[i].email, artistId: NotifyData[i].artist_id, enquiryArtistId: NotifyData[i].enquiry_artist_id, mobile: NotifyData[i].mobile });
        }
      }

      let createEmail;
      let createText;
      let insertMailRecipient;
      let insertMessageRecipient;
      if (email.length > 0) {
        let subject = `Mad Dog 2020 Artist Enquiry:${title}`;
        let emailBody = template();
        createEmail = await helpers.createMessage(process.env.senderMail, subject, emailBody, 1, enquiryId, userId, "email");

        if (createEmail.m_id) {
          insertMailRecipient = await helpers.insertMessageRecipientBulk(createEmail.m_id, NotifyData, userEmail[0].email, "email");
        }
        if (insertMailRecipient.status == 1) {
          await listenerFun(createEmail.m_id, "emailBulk");
          // await conn.query(`SELECT pg_notify('message', '{"id":${createEmail.m_id},"type":"emailBulk"}')`,{type: QueryTypes.SELECT})
        }
      }
      if (text.length > 0) {
        console.log(text, "text Details");
        let textBody = `${title}. Please reply ASAP via $enquiry_mlink, or login in to your profile ($artist_id)`;
        createText = await helpers.createMessage(process.env.senderMail, null, textBody, 1, enquiryId, userId, "text");

        if (createText.m_id) {
          insertMessageRecipient = await helpers.insertMessageRecipientBulk(createText.m_id, NotifyData, userEmail[0].email, "text");
        }
        if (insertMessageRecipient.status == 1) {
          console.log(createText.m_id, "createText.m_id");
          await listenerFun(createText.m_id, "textBulk", title);

          //     await conn.query(`SELECT pg_notify('message', '{"id":${createText.m_id},"type":"textBulk","title":"${title}"}')`,{type: QueryTypes.SELECT})
        }
      }
      let response = {
        status: 1,
        message: "Mail Sent Successufully",
        data: enquiryId,
      };
      res.status(200).json(response);
    } else {
      let response = {
        status: 2,
        message: "Data not Found for selected artists",
      };
      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    let response = {
      status: 0,
      message: "Internal server error",
      error,
    };
    res.status(500).json(response);
  }
};
module.exports = { bulkNotifyData };
