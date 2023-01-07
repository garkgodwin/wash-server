const authJwt = require("../middlewares/authJWT");
const check = require("../middlewares/check");
const controller = require("../controllers/booking.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.get("/", controller.getBookings);
  router.post("/book", controller.createBooking);
  app.use("/api/v1/bookings", router);
};
