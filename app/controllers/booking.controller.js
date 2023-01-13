const db = require("../models");
const BookingModel = db.bookings;
const UserModel = db.users;
const NotificationModel = db.notifications;

exports.getBookings = async (req, res) => {
  const loggedUserID = req.userId;
  const loggedUser = await UserModel.findById(loggedUserID).exec();
  let filter = {};
  if (loggedUser.role === 1 || loggedUser.role === 2) {
    //? admin and staff can view all bookings
    filter = {};
  } else {
    //? customer can view own bookings
    filter = {
      customer: loggedUser._id,
    };
  }
  const bookings = await BookingModel.find(filter)
    .populate({
      path: "customer",
    })
    .exec();

  return res.status(200).send({
    message: "Successfully fetched the bookings",
    bookings: bookings,
  });
};

exports.getDetailedBooking = async (req, res) => {
  console.log(req.params.bookingID);
  const booking = await BookingModel.findById(req.params.bookingID)
    .populate({
      path: "customer",
    })
    .exec();
  if (!booking) {
    return req.status(404).send({
      message: "Booking not found",
    });
  }
  return res.status(200).send({
    message: "Successfully fetched the booking details",
    booking: booking,
  });
};

exports.createBooking = async (req, res) => {
  const loggedUserID = req.userId;
  const body = req.body;
  const user = await UserModel.findById(body.customer._id);
  if (!user) {
    return res.status(404).send({
      message: "Customer is not found",
    });
  }

  const newNotif = NotificationModel({
    body: `A booked laundry has been created for you`,
    mobileNumber: user.mobileNumber,
  });
  await newNotif.save();

  const newBooking = BookingModel({
    customer: user._id,
    date: body.date,
    type: body.type,
    laundry: body.laundry,
    subTotal: body.subTotal,
    total: body.total,
    paid: false,
    status: 1,
  });
  await newBooking.save();
  return res.status(200).send({
    message: "Successfully created a booking.",
  });
};

exports.updateBooking = async (req, res) => {
  const body = req.body;
  const id = req.params.bookingID;

  let booking = await BookingModel.findById(id).populate({
    path: "customer",
  });
  if (!booking) {
    return res.status(404).send({
      message: "Booking does not exist.",
    });
  }

  booking.subTotal = body.subTotal;
  booking.total = body.total;
  booking.paid = body.paid;
  booking.status = body.status;
  await booking.save();

  const s = body.status;
  const stats =
    s === 1
      ? "Your booked laundry has been picked up."
      : s === 2
      ? "Your booked laundry is now being washed."
      : s === 3
      ? "Your laundry is now being prepared for delivery."
      : s === 4
      ? "Your laundry is now out for delivery."
      : s === 5
      ? "Your laundry is now delivered."
      : "";
  const newNotif = NotificationModel({
    body: stats,
    mobileNumber: booking.customer.mobileNumber,
  });
  await newNotif.save();

  return res.status(200).send({
    message: "Successfully updated a booking",
    booking: booking,
  });
};
