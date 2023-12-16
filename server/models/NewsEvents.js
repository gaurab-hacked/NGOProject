const mongoose = require("mongoose");

const newsEvents = mongoose.Schema({
  title: String,
  description: String,
  active: Boolean,
  category: String,
  image: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("newsEvents", newsEvents);
