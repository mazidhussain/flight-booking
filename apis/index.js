const app = require("./app");
const { connectDatabase } = require("./config/database");
const port = 4000;

// connecting database

connectDatabase();

app.listen(port, (req, res) => {
  console.log("Server is running on port", port);
});
