module.exports = (app) => {
  app.get("/api/v1", (req, res) => {
    res.send({ message: "Welcome to the API version 1.0" });
  });
  require("./auth.routes")(app);
  require("./booking.routes")(app);
  require("./laundry.routes")(app);
  require("./notification.routes")(app);
};
