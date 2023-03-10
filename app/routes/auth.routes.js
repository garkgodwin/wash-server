const authJwt = require("../middlewares/authJWT");
const check = require("../middlewares/check");
const controller = require("../controllers/auth.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.get("/profile", [authJwt.verifyToken], controller.getUser);

  router.post(
    "/register",
    [check.checkName, check.checkUsername, check.checkMobileNumber],
    controller.register
  );
  router.put("/activate", [authJwt.verifyToken], controller.activate);

  router.post("/login", [check.checkLoginInputs], controller.login);

  router.get(
    "/staffs",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getStaffs
  );

  app.use("/api/v1/auth", router);
};
