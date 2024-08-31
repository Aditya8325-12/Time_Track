const mongoose = require("../Config/database");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = userSchema;
