const express = require("express");
const route = express.Router();
const checkPrivilege = require("../middleware/checkPrivilege");
const Album = require("../models/Album");
const upload = require("../middleware/uploadInBlog");
const dotenv = require("dotenv");
const fs = require("fs/promises");

dotenv.config();

// Get categories [GET: http://localhost:8000/api/album/categories] (register not required)
route.get("/categories", async (req, res) => {
  try {
    const data = await Album.find();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get categories [GET: http://localhost:8000/api/album/album/:id] (register not required)
route.get("/album/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Album.findById(id);
    if (!data) {
      return res.status(404).json({ error: "Album not found" });
    }
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post categories [POST: http://localhost:8000/api/album/album] (register required)
route.post(
  "/album",
  checkPrivilege,
  upload.single("image"),
  async (req, res) => {
    try {
      const { albumName, albumDate, active } = req.body;
      // Check if the album already exists
      const checkExistence = await Album.findOne({ albumName });
      if (checkExistence) {
        return res.status(400).json({ error: "Album Already Exists" });
      }

      // Adding a new album
      const imgPath = req.file ? process.env.domain + req.file.path : "";
      const newAlbum = new Album({
        albumName,
        albumDate,
        active,
        image: imgPath,
      });

      await newAlbum.save();
      res.json({ success: "Album Added", data: newAlbum });
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error " + e.message });
    }
  }
);

// Update categories [PATCH: http://localhost:8000/api/album/album/:id] (register required)
route.patch(
  "/album/:id",
  checkPrivilege,
  upload.single("image"),
  async (req, res) => {
    try {
      const { albumName, albumDate, active } = req.body;
      // Check if the album exists
      const currentAlbum = await Album.findById(req.params.id);
      if (!currentAlbum) {
        return res.status(400).json({ error: "Album doesn't exist" });
      }

      // Set update details in a new variable
      const updatedAlbum = {};
      if (albumName) {
        updatedAlbum.albumName = albumName;
      }
      if (albumDate) {
        updatedAlbum.albumDate = albumDate;
      }
      if (String(active).length > 2) {
        updatedAlbum.active = active;
      }

      if (req.file) {
        // If a new image is provided, update the image path
        updatedAlbum.image = process.env.domain + req.file.path;

        // Delete the old image if it exists
        if (currentAlbum.image) {
          const oldImagePath = currentAlbum.image.slice(
            process.env.domain.length
          );
          await fs.unlink(oldImagePath);
        }
      }

      // Find the album and update
      const updated = await Album.findByIdAndUpdate(
        req.params.id,
        { $set: updatedAlbum },
        { new: true }
      );

      res.json({
        success: "Album update successful",
        album: updated,
      });
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error " + e.message });
    }
  }
);

// Delete categories [DELETE: http://localhost:8000/api/album/album/:id] (register required)
route.delete("/album/:id", checkPrivilege, async (req, res) => {
  try {
    const albumId = req.params.id;
    // Find album and check if it exists
    const currentAlbum = await Album.findById(albumId);
    if (!currentAlbum) {
      return res.status(400).json({ error: "Album Not Found" });
    }

    // Delete the album
    await Album.findByIdAndDelete(albumId);

    // Delete the associated image if it exists
    if (currentAlbum.image) {
      const imagePath = currentAlbum.image.slice(process.env.domain.length);
      await fs.unlink(imagePath);
    }

    res.json({ success: "Album Deleted Successfully" });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e.message });
  }
});

module.exports = route;
