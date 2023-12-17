const express = require("express");
const route = express.Router();
const fetchuser = require("../middleware/fetchuser");
const imageModel = require("../models/Images");
const Category = require("../models/Album");
const checkPrivilege = require("../middleware/checkPrivilege");
const upload = require("../middleware/uploadInBlog");
const fs = require("fs").promises; // Use fs.promises for asynchronous file operations
const mongoose = require("mongoose");

// Helper function to delete images
const deleteImage = async (imagePaths) => {
  try {
    for (const imagePath of imagePaths) {
      await fs.unlink(imagePath.slice(process.env.domain.length));
    }
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};

// Get all images [GET: http://localhost:8000/api/gallery/images] (register not required)
route.get("/images", async (req, res) => {
  try {
    const allImages = await imageModel.find();
    res.json(allImages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " + error.message });
  }
});

// Get a single image by ID [GET: http://localhost:8000/api/gallery/image/:id] (register not required)
route.get("/image/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    const foundImage = await imageModel.findById(imageId);
    res.json(foundImage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " + error.message });
  }
});

// Upload images [POST: http://localhost:8000/api/gallery/images] (register required)
route.post(
  "/images",
  checkPrivilege,
  upload.array("image", 4),
  async (req, res) => {
    try {
      const { categoryId } = req.body;

      // Check if files are uploaded
      if (!req.files.length > 0)
        return res.status(400).json({ error: "Please Upload File" });

      // Check category
      const category = await Category.findById(categoryId);
      if (!category) {
        await deleteImage(req.files);
        return res.status(400).json({ error: "Sorry Category Not Found" });
      }

      const images = req.files.map((file) => process.env.domain + file.path);

      const newImage = new imageModel({
        categoryId,
        image: images,
      });

      await newImage.save();
      res.json({ success: "Image Added", image: newImage });
    } catch (error) {
      await deleteImage(req.files);
      res.status(500).json({ error: "Internal Server Error " + error.message });
    }
  }
);

// Delete images [DELETE: http://localhost:8000/api/gallery/images/:id] (register required)
route.delete("/images/:id", checkPrivilege, async (req, res) => {
  try {
    const imageId = req.params.id;
    const foundImage = await imageModel.findById(imageId);

    if (!foundImage) {
      return res.status(400).json({ error: "Image Not Found" });
    }

    await deleteImage(foundImage.image);
    await foundImage.remove();

    res.json({ success: "Image Deleted Success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " + error.message });
  }
});

// Update images [PATCH: http://localhost:8000/api/gallery/images/:id] (register required)
route.patch(
  "/images/:id",
  checkPrivilege,
  upload.array("image", 4),
  async (req, res) => {
    try {
      const imageId = req.params.id;
      const foundImage = await imageModel.findById(imageId);

      if (!foundImage) {
        await deleteImage(req.files);
        return res.status(404).json({ error: "Image Not Found" });
      }

      const { categoryId } = req.body;
      let newImages = foundImage.image;

      if (req.files.length > 0) {
        await deleteImage(foundImage.image);

        newImages = req.files.map((file) => process.env.domain + file.path);
      }

      const updatedImage = {
        categoryId,
        image: newImages,
      };

      if (categoryId) {
        const category = await Category.findById(categoryId);
        if (!category) {
          await deleteImage(req.files);
          return res.status(400).json({ error: "Sorry Category Not Found" });
        }
      }

      const updatedImageResult = await imageModel.findByIdAndUpdate(
        imageId,
        { $set: updatedImage },
        { new: true }
      );

      res.json({ success: "Image Update Success", image: updatedImageResult });
    } catch (error) {
      await deleteImage(req.files);
      res.status(500).json({ error: "Internal Server Error " + error.message });
    }
  }
);

// Update image like [PATCH: http://localhost:8000/api/gallery/images/like/:id] (register required)
route.patch("/images/like/:id", fetchuser, async (req, res) => {
  try {
    const imageId = req.params.id;
    const foundImage = await imageModel.findById(imageId);

    if (!foundImage) {
      return res.status(404).json({ error: "Image Not Found" });
    }

    const likeId = req.user.id;
    const isLiked = foundImage.likeId.includes(likeId);

    if (!isLiked) {
      foundImage.likeId.push(mongoose.Types.ObjectId(likeId));
      await foundImage.save();
      res.json({ success: "Like Success" });
    } else {
      foundImage.likeId.pull(likeId);
      await foundImage.save();
      res.json({ success: "Dislike Success" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " + error.message });
  }
});
// Remove image URL from the array [PATCH: http://localhost:8000/api/gallery/images/remove-url/:id] (register required)
route.patch("/images/remove-url/:id", checkPrivilege, async (req, res) => {
  try {
    const imageId = req.params.id;
    const imageURL = String(req.body.imageURL).trim(); // Assuming you send the URL in the request body

    // Extract the filename from the URL
    const filenameFromURL = imageURL.split("/").pop();

    // Check if the image exists
    const foundImage = await imageModel.findById(imageId);
    if (!foundImage) {
      return res.status(404).json({ error: "Image Not Found" });
    }

    // Check if the provided filename is in the image array
    const filenameIndex = foundImage.image.findIndex((url) => {
      const filenameFromArray = url.split("/").pop();
      return filenameFromArray === filenameFromURL;
    });

    if (filenameIndex !== -1) {
      // Remove the filename from the array
      foundImage.image.splice(filenameIndex, 1);

      // If there are no more images in the array, delete the entire image
      if (foundImage.image.length === 0) {
        await imageModel.findByIdAndDelete(imageId);
        return res.json({
          success: "Filename removed successfully",
          id: imageId,
        });
      }

      // Save the updated image
      const updatedImage = await foundImage.save();

      return res.json({
        success: "Filename removed successfully",
        image: updatedImage,
      });
    } else {
      return res
        .status(404)
        .json({ error: "Filename not found in image array" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " + error.message });
  }
});

module.exports = route;
