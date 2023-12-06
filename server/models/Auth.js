const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  privilege: {
    type: Number, // 0=>normal user, 1=>admin, 2=>superadmin
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", User);
