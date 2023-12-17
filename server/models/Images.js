const mongoose = require("mongoose");

const images = mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  likeId: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
  date: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: Array,
  },
});

module.exports = mongoose.model("images", images);
