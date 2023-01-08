const db = require("../models");
const UserModel = db.users;
const NotificationModel = db.notifications;
const generate = require("../helpers/generate");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants/configs");

exports.register = async (req, res) => {
  const body = req.body;

  const otp = generate.generateOtp();
  const hashed = generate.generateHashedPassword(body.password);

  let user = body;
  user = {
    ...user,
    password: hashed,
    otpActivated: otp,
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

exports.login = async (req, res) => {
  const body = req.body;

  const user = await UserModel.findOne({
    username: body.username,
  }).exec();
  if (!user) {
    return res.status(409).send({
      message: "Invalid credentials",
    });
  }

  const passwordIsValid = bcrypt.compareSync(body.password, user.password);
  if (!passwordIsValid) {
    return res.status(409).send({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ id: user._id }, SECRET_KEY, {
    expiresIn: 86400, // 24hours
  });

  return res.status(200).send({
    message: "Login successful",
    token: token,
    user: user,
  });
};

exports.getUser = async (req, res) => {
  const id = req.userId;
  if (!id) {
    return res.status(404).send({
      message: "User is not found",
    });
  }
  const user = await UserModel.findById(id).exec();

  if (!user) {
    return res.status(404).send({
      message: "User is not found",
    });
  }
  return res.status(200).send({
    message: "Successfully fetched your profile info",
    data: user,
  });
};
