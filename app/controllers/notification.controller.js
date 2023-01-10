const db = require("../models");
const NotificationModel = db.notifications;

exports.getAllNotifications = async (req, res) => {
  const data = await NotificationModel.find({}).exec();
  return res.status(200).send({
    message: "Successfully fetched the notifications",
    notifications: data,
  });
};

exports.getUnsentNotifications = async (req, res) => {
  const data = await NotificationModel.find({
    sent: false,
  }).exec();
  for (let i = 0; i < data.length; i++) {
    await NotificationModel.findByIdAndUpdate(data[i]._id, {
      sent: true,
    }).exec();
  }
  return res.status(200).send({
    message: "Successfully fetched unsent notification",
    notifications: data,
  });
};
