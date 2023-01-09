const db = require("../models");
const NotificationModel = db.notifications;

exports.getAllNotifications = async (req, res) => {
  const data = await NotificationModel.find({}).exec();
  return res.status(200).send({
    message: "Successfully fetched the notifications",
    notifications: data,
  });
};

exports.getUnsentNotification = async (req, res) => {
  const data = await NotificationModel.findOne({
    sent: false,
  }).exec();
  console.log(data);
  return res.status(200).send({
    message: "Successfully fetched unsent notification",
    notification: data,
  });
};

exports.sendNotification = async (req, res) => {
  const notificationID = req.params.notificationID;
  const sent = req.params.sent;

  const data = await NotificationModel.findById(notificationID).exec();
  if (data.sent !== sent) {
    data.sent = sent;
    await data.save();
  }

  return res.status(200).send({
    message: "Successfully sent the notification",
  });
};
