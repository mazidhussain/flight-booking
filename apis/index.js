const express = require("express");
const { connectDatabase } = require("./config/database");
const app = express();
const port = 4000;

// connecting database

connectDatabase();

app.listen(port, (req, res) => {
  console.log("Server is running on port", port);
});
