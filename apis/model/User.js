const mongoose = require("mongoose");
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exist"],
    validate: validator.isEmail,
  },
  address: {
    type: String,
    required: [true, "Please enter an address"],
  },
  phone: {
    type: String,
    required: [true, "please enter a phone number"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Password must be atleast 6 characters long"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
