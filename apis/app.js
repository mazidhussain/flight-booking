const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

// importing the routes
const user = require("./routes/user");

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}));

//converting request of req.body
app.use(express.json());

// For testing purpose
app.get('/test', (req, res) => {
    res.json("Api is working");
});

// using the routes
app.use("/api/v1", user);

module.exports = app;
