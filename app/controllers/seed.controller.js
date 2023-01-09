const db = require("../models");
const UserModel = db.users;
const BookingModel = db.bookings;
const LaundryModel = db.laundries;
const { generateHashedPassword } = require("../helpers/generate");

exports.startSeed = async (connection) => {
  await drop(connection);
  await createAdmin();
  await createLaundyInfo();
};

const drop = async (connection) => {
  console.log("System: clearing collections");
  connection.dropCollection("users", () => {
    console.log("System: dropped users table");
  });
  connection.dropCollection("bookings", () => {
    console.log("System: dropped bookings table");
  });
  connection.dropCollection("laundries", () => {
    console.log("System: dropped laundries table");
  });
  console.log("System: collections cleared");
  // const collections = await mongoose.connection.db.collections()

  // for (let collection of collections) {
  //   await collection.remove()
  // }
};

const createAdmin = async () => {
  console.log("System: creating admin");
  const newAdmin = UserModel({
    name: "John Smith",
    username: "admin",
    password: generateHashedPassword("admin"),
    role: 1,
    otpActivated: null,
    otpForgotten: null,
    address: "Somewhere down the road",
    lattitude: "",
    longitude: "",
  });
  await newAdmin.save();
  console.log("System: admin created");
};

const createLaundyInfo = async () => {
  console.log("System: creating laundry info");
  const info = LaundryModel({
    regularPrice: 25,
    regularMin: 6,
    whitePrice: 35,
    whiteMin: 5,
    maongPrice: 35,
    maongMin: 5,
    comforterPrice: 45,
    comforterMin: 4,
  });

  await info.save();
  console.log("System: laundry info created");
};
