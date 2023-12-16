const route = require("express").Router();
const newsEvents = require("../models/NewsEvents");
const checkPrivilege = require("../middleware/checkPrivilege");
const upload = require("../middleware/uploadInBlog");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

// Function to delete an image
const deleteImage = (imagePath) => {
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }
};

// Function to get the full image path
const getFullImagePath = (relativePath) => {
  return process.env.domain + relativePath;
};

// get newsEvents [GET: http://localhost:8000/api/newsEvents/newsEvents/:id]  (register not required)
route.get("/newsEvents/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await newsEvents.findById(id);
    if (!data) {
      return res.status(404).json({ error: "newsEvents not found" });
    }
    res.json(data);
  } catch (e) {
    console.error("Error:", e);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: e.message });
  }
});

// get newsEvents [GET: http://localhost:8000/api/newsEvents/newsEventses]  (register not required)
route.get("/newsEventses", async (req, res) => {
  try {
    const data = await newsEvents.find();
    res.json(data);
  } catch (e) {
    console.error("Error:", e);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: e.message });
  }
});

// post newsEvents [POST: http://localhost:8000/api/newsEvents/newsEvents]  (register required)
route.post(
  "/newsEvents",
  checkPrivilege,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, description, active, category } = req.body;

      if (!title || !description || !active || !category) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const findTitle = await newsEvents.findOne({ title });
      if (findTitle) {
        if (req.file) {
          deleteImage(req.file.path);
        }
        return res
          .status(400)
          .json({ error: "newsEvents Title Already Exists" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "Please Upload an Image" });
      }

      const imagePath = getFullImagePath(req.file.path);

      const newsEventsItem = {
        title,
        description,
        image: imagePath,
        active,
        category,
      };

      const newNewsEvents = await new newsEvents(newsEventsItem);
      await newNewsEvents.save();

      res.json({
        success: "newsEvents Added Successfully",
        newsEvents: newNewsEvents,
      });
    } catch (e) {
      console.error("Error:", e);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: e.message });
    }
  }
);

// Delete newsEvents [DELETE: http://localhost:8000/api/newsEvents/newsEvents/:id]  (register required)
route.delete("/newsEvents/:id", checkPrivilege, async (req, res) => {
  try {
    const newsEventsId = req.params.id;
    const checknewsEvents = await newsEvents.findById(newsEventsId);

    if (!checknewsEvents) {
      return res.status(400).json({ error: "newsEvents Not Exist" });
    }

    const imagePath = path.join(
      __dirname,
      "..",
      checknewsEvents.image.slice(process.env.domain.length)
    );

    await newsEvents.findByIdAndDelete(newsEventsId);
    deleteImage(imagePath);

    res.json({ success: "newsEvents Data Deleted" });
  } catch (e) {
    console.error("Error:", e);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: e.message });
  }
});

// Update newsEvents [PATCH: http://localhost:8000/api/newsEvents/newsEvents/:id]  (register required)
route.patch(
  "/newsEvents/:id",
  checkPrivilege,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, description, active, category } = req.body;
      const newsEventsId = req.params.id;
      const checknewsEvents = await newsEvents.findById(newsEventsId);

      if (!checknewsEvents) {
        return res.status(400).json({ error: "newsEvents Not Exist" });
      }

      let updatenewsEvents = {};
      if (title) updatenewsEvents.title = title;
      if (description) updatenewsEvents.description = description;
      if (active) updatenewsEvents.active = active;
      if (category) updatenewsEvents.category = category;

      let imagePath = checknewsEvents.image;

      if (req.file) {
        deleteImage(
          path.join(
            __dirname,
            "..",
            checknewsEvents.image.slice(process.env.domain.length)
          )
        );
        imagePath = getFullImagePath(req.file.path);
      }

      updatenewsEvents.image = imagePath;

      const updatedNewsEvents = await newsEvents.findOneAndUpdate(
        { _id: newsEventsId },
        { $set: updatenewsEvents },
        { new: true }
      );

      res.json({
        success: "newsEvents Update Success",
        newsEvents: updatedNewsEvents,
      });
    } catch (e) {
      console.error("Error:", e);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: e.message });
    }
  }
);

module.exports = route;
