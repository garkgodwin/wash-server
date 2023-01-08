const authJwt = require("../middlewares/authJWT");
const check = require("../middlewares/check");
const controller = require("../controllers/laundry.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.get("/", controller.getLaundryInfo);
  router.put("/", controller.updateLaundryInfo);
  app.use("/api/v1/laundries", router);
};
