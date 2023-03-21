const express = require("express");
const { register } = require("../contollers/user");
const router = express.Router();

// register route
router.route("/register").post(register);

module.exports = router;
