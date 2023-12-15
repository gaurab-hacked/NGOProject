const mongoose = require("mongoose");

const Category = mongoose.Schema({
  categoryName: String,
  displayOrder: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("category", Category);
