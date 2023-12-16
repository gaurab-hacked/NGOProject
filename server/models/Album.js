const mongoose = require("mongoose");

const album = mongoose.Schema({
  albumName: String,
  albumDate: String,
  active: Boolean,
  image: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("album", album);
