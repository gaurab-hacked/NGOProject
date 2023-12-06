const mongoose = require("mongoose");

const Blogs = mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
    default: null,
  },
  title: String,
  description: String,
  likeId: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  like: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
  price: Number,
  metal: Number,
  weight: Number,
  westage: Number,
  discount: Number,
  maxQuantity: Number,
  address: String,
  phNumber: Number,
  averageRating: { type: Number, default: 0 },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: Array,
  },
});

module.exports = mongoose.model("Blogs", Blogs);
