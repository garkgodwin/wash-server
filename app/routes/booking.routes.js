const authJwt = require("../middlewares/authJWT");
const check = require("../middlewares/check");
const controller = require("../controllers/booking.controller");
let router = require("express").Router();

module.exports = function (app) {
  router.get("/", [authJwt.verifyToken], controller.getBookings);
  router.get(
    "/detail/:bookingID",
    [authJwt.verifyToken],
    controller.getDetailedBooking
  );
  router.post("/book", [authJwt.verifyToken], controller.createBooking);
  app.use("/api/v1/bookings", router);
};
