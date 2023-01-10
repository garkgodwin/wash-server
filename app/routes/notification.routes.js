const controller = require("../controllers/notification.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.get("/", controller.getAllNotifications);
  router.get("/unsent", controller.getUnsentNotifications);
  app.use("/api/v1/notifications", router);
};
