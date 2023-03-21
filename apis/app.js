const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

//converting request of req.body
app.use(express.json());

// importing the routes

const user = require("./routes/user");

// using the routes

app.use("/api/v1", user);

module.exports = app;
