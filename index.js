const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = require("./app/middlewares/corsOptions");

//? MIDDLEWARES===============================================
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const models = require("./app/models");
const db = require("./app/db");
require("./app/routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Laundry Server" });
});

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
  db.connect(models.mongoose);
});
