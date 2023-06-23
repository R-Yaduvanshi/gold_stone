const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  gender: String,
  status: String,
  created_at: String,
  updated_at: String,
});

const Users = mongoose.model("User", userSchema);

module.exports = { Users };
