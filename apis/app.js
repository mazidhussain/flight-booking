const express = require("express");
const app = express();

// importing the routes

const user = require("./routes/user");

// using the routes

app.use("/api/v1", user);

module.exports = app;
