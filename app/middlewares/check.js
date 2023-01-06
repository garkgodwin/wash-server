const db = require("../models");
const UserModel = db.users;

exports.checkName = async (req, res, next) => {
  const body = req.body;
  if (body.name === null || body.name === "") {
    return res
      .status(409)
      .send({ message: "Please make sure to enter the name." });
  }
  const nameExists = await UserModel.findOne({
    name: body.name,
  }).exec();
  if (nameExists) {
    return res
      .status(409)
      .send({ message: `The name ${body.name} has already been used.` });
  }
  return next();
};

exports.checkUsername = async (req, res, next) => {
  const body = req.body;
  if (body.username === null || body.username === "") {
    return res
      .status(409)
      .send({ message: "Please make sure to enter the username." });
  }
  const exists = await UserModel.findOne({
    username: body.username,
  }).exec();
  if (exists) {
    return res.status(409).send({
      message: `The username ${body.username} has already been used.`,
    });
  }
  return next();
};

exports.checkMobileNumber = async (req, res, next) => {
  const body = req.body;
  if (body.mobileNumber === null || body.mobileNumber === "") {
    return res
      .status(409)
      .send({ message: "Please make sure to enter the mobile number." });
  }
  const exists = await UserModel.findOne({
    mobileNumber: body.mobileNumber,
  }).exec();
  if (exists) {
    return res.status(409).send({
      message: `The number ${body.mobileNumber} has already been used.`,
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
