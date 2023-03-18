const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://sagarbhatia:12345@flightbooking.myznqmu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((con) => {
      console.log(`Database connected : ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
