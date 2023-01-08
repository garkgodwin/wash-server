const db = require("../models");
const LaundryModel = db.laundries;

exports.getLaundryInfo = async (req, res) => {
  const infos = await LaundryModel.find({}).exe();

  const info = infos[0];

  return res.status(200).send({
    message: "Successfully fetched the laundry info",
    data: info,
  });
};

exports.updateLaundryInfo = async (req, res) => {
  const laundryID = req.params.laundryID;
  const b = req.body;
  let info = await LaundryModel.findById(laundryID).exec();
  info.regularPrice = b.regularPrice;
  info.regularMin = b.regularMin;
  info.whitePrice = b.whitePrice;
  info.whiteMin = b.whiteMin;
  info.maongPrice = b.maongPrice;
  info.maongMin = b.maongMin;
  info.comforterPrice = b.comforterPrice;
  info.comforterMin = b.comforterMin;
  await info.save();
  return res.status(200).send({
    message: "Successfully updated the laundry info",
    data: info,
  });
};

exports.createLaundyInfo = async () => {
  console.log("Creating laundry info");
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
  console.log("Created laundry info");
};
