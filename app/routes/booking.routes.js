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
  router.post(
    "/book/:customerID",
    [authJwt.verifyToken],
    controller.createBooking
  );
  router.put(
    "/update/:bookingID",
    [authJwt.verifyToken, authJwt.isAdmin, authJwt.isStaff],
    controller.updateBooking
  );
  app.use("/api/v1/bookings", router);
};
