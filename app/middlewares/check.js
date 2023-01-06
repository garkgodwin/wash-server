const db = require("../models");
const UserModel = db.users;

exports.checkName = async (req, res, next) => {
  const body = req.body;
  const user = body.user;
  if (user.name === null || user.name === "") {
    return res
      .status(409)
      .send({ message: "Please make sure to enter the name." });
  }
  const nameExists = await UserModel.findOne({
    name: user.name,
  }).exec();
  if (nameExists) {
    return res
      .status(409)
      .send({ message: `The name ${user.name} has already been used.` });
  }
  return next();
};

exports.checkUsername = async (req, res, next) => {
  const body = req.body;
  const user = body.user;
  if (user.username === null || user.username === "") {
    return res
      .status(409)
      .send({ message: "Please make sure to enter the username." });
  }
  const exists = await UserModel.findOne({
    username: user.username,
  }).exec();
  if (exists) {
    return res.status(409).send({
      message: `The username ${user.username} has already been used.`,
    });
  }
  return next();
};

exports.checkMobileNumber = async (req, res, next) => {
  const body = req.body;
  const user = body.user;
  if (user.mobileNumber === null || user.mobileNumber === "") {
    return res
      .status(409)
      .send({ message: "Please make sure to enter the mobile number." });
  }
  const exists = await UserModel.findOne({
    mobileNumber: user.mobileNumber,
  }).exec();
  if (exists) {
    return res.status(409).send({
      message: `The number ${user.mobileNumber} has already been used.`,
    });
  }
  return next();
};

//? main
exports.checkLoginInputs = (req, res, next) => {
  const body = req.body;
  if (!body) {
    return res.status(404).send({
      message: "There are no inputs sent to the server.",
    });
  }
  if (body.username === "") {
    return res.status(409).send({
      message: "There is no username sent to the server.",
    });
  }
  if (body.password === "") {
    return res.status(409).send({
      message: "There is no password sent to the server.",
    });
  }
  return next();
};
