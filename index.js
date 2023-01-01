const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger.httpLogger);
app.get("/", (req, res) => {
  res.json({ message: "QIT SERVER." });
});
const SERVER_PORT = 8000;
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});
