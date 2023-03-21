const User = require("../model/User");

exports.register = async (req, res) => {
  try {
    const { name, email,mobile, password,address } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    user = await User.create({
      name,
      email,
      mobile,
      password,
      address
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
