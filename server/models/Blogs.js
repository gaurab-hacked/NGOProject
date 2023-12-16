const mongoose = require("mongoose");

const Blogs = mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  subcategoryId: {
    type: String,
    default: null,
  },
  title: String,
  subtitle: String,
  description: String,
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

module.exports = mongoose.model("Blogs", Blogs);
