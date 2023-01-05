const db = require("../models");
const otpGenerator = require("otp-generator");
var bcrypt = require("bcryptjs");

exports.generateOtp = () => {
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    specialChars: false,
  });
  return otp;
};

exports.generateHashedPassword = (rawPassword) => {
  return bcrypt.hashSync(rawPassword, 8);
};
