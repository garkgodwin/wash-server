const db = require("../models");
const UserModel = db.users;
const NotificationModel = db.notifications;
const generate = require("../helpers/generate");

exports.register = async (req, res) => {
  const body = req.body;
  let user = body.user;

  const otp = generate.generateOtp();
  const hashed = generate.generateHashedPassword(user.password);

  user = {
    ...user,
    password: hashed,
    otp: otp,
  };
  const newUser = UserModel(user);
  const newNotif = NotificationModel({
    body: `Your OTP is: ${otp}`,
    mobileNumber: user.mobileNumber,
  });

  await newUser.save();
  await newNotif.save();

  return res.status(200).send({
    message:
      "Successfully registered, please login and enter the otp sent to your mobile number",
  });
};
