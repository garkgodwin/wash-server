const authJwt = require("../middlewares/authJWT");
const check = require("../middlewares/check");
const controller = require("../controllers/auth.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.post(
    "/register",
    [
      check.checkName,
      check.checkUsername,
      check.checkEmail,
      check.checkMobileNumber,
    ],
    controller.register
  );

  router.post("/login", [check.checkLoginInputs], controller.login);

  app.use("/api/v1/auth", router);
};
