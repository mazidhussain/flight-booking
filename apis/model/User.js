const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exist"],
  },
  address: {
    type: String,
    required: [false, "Please enter an address"],
  },
  phone: {
    type: String,
    required: [false, "please enter a phone number"],
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
