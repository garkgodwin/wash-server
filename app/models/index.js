const mongoose = require("mongoose");
Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = require("./user.model")(mongoose);
db.notifications = require("./notification.model")(mongoose);

module.exports = db;
