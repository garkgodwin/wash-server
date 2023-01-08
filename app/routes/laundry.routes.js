const authJwt = require("../middlewares/authJWT");
const check = require("../middlewares/check");
const controller = require("../controllers/laundry.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.get(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin, authJwt.isStaff, authJwt.isStaff],
    controller.getLaundryInfo
  );
  router.put("/", controller.updateLaundryInfo);
  app.use("/api/v1/laundries", router);
};
