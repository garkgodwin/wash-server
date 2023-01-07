const db = require("../models");
const BookingModel = db.bookings;

exports.getBookings = async (req, res) => {
  const bookings = await BookingModel.find({})
    .populate({
      path: "customer",
    })
    .exec();
  return res.status(200).send({
    message: "Successfully fetched all the bookings",
    data: bookings,
  });
};

exports.createBooking = async (req, res) => {
  const body = req.body;
  const newBooking = BookingModel(body);
  await newBooking.save();
  return res.status(200).send({
    message: "Successfully created a booking.",
  });
};
