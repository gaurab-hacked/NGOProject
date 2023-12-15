const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");
const PORT = process.env.PORT || 8000;

// strict query make false in DB.
// connecting to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASEURL);

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// making api routes
app.use("/api/auth", require("./routes/Auth.js"));
app.use("/api/category", require("./routes/Category"));
app.use("/api/subcategory", require("./routes/Subcategory"));
app.use("/api/post", require("./routes/Blogs"));
app.use("/api/carousel", require("./routes/Carousel"));
app.use("/api/project", require("./routes/Project"));
app.use("/api/contact", require("./routes/Contact"));
app.use("/api/target", require("./routes/Target"));

// !================= for static routes =================
app.use("/api/statistics", require("./routes/Statistics"));

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
