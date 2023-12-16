const mongoose = require("mongoose");

const project = mongoose.Schema({
  title: String,
  url: String,
  description: String,
  active: Boolean,
  category: String,
  image: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("project", project);
