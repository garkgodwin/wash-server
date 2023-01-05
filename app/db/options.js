const { env } = require("../constants/configs");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
  dbName: "db-laundry-prod",
};

module.exports = options;
