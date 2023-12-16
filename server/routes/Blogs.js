const route = require("express").Router();
const fetchuser = require("../middleware/fetchuser");
const Blog = require("../models/Blogs");
require("dotenv").config();
const upload = require("../middleware/uploadInBlog");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");
const checkPrivilege = require("../middleware/checkPrivilege");

// delete image if some error occurred
const deleteImage = (array) => {
  array.forEach((e) => {
    fs.unlinkSync(e.path);
  });
};

// get Blogs [GET: http://localhost:8000/api/post/blogs]  (register not required)
route.get("/blogs", async (req, res) => {
  try {
    const norevdata = await Blog.find();
    res.json(norevdata);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

// get Blog [GET: http://localhost:8000/api/post/blog/:id]  (register not required)
route.get("/blog/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const data = await Blog.findById(blogId);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

// Post Blogs [POST: http://localhost:8000/api/post/blogs] (register required)
route.post(
  "/blogs",
  checkPrivilege,
  upload.array("image", 4),
  async (req, res) => {
    try {
      const { categoryId, subcategoryId, title, subtitle, description } =
        req.body;

      // check if file is uploaded or not
      if (!req.files.length > 0)
        return res.status(400).json({ error: "Please Upload File" });

      const category = await Category.findById(categoryId);
      // check category
      if (!category) {
        deleteImage(req.files);
        return res.status(400).json({ error: "Sorry Category Not Found" });
      }

      // check subcategory
      // if (subcategoryId !== "" || subcategoryId !== "") {
      //   const subcategory = await Subcategory.findById(subcategoryId);
      //   if (!subcategory) {
      //     deleteImage(req.files);
      //     return res.status(400).json({ error: "Sorry Subcategory Not Found" });
      //   }
      // }

      let images = [];
      const likeId = req.user.id;

      if (req.files.length > 0) {
        images = req.files.map((file) => {
          return process.env.domain + file.path;
        });
      }

      const blog = new Blog({
        title,
        subtitle,
        description,
        categoryId,
        subcategoryId: subcategoryId ? subcategoryId : null,
        image: images,
      });

      if (!blog) {
        deleteImage(req.files);
        return res.json({ error: "Unable To Add Blog" });
      }

      await blog.save();
      res.json({ success: "Blog Added", blog: blog });
    } catch (e) {
      if (req.files.length > 0) {
        deleteImage(req.files);
      }
      res.status(500).json({ error: "Internal Server Error " + e });
    }
  }
);

// Delete Blogs [DELETE: http://localhost:8000/api/post/blogs/:id] (register required)
route.delete("/blogs/:id", checkPrivilege, async (req, res) => {
  try {
    const blogId = req.params.id;
    // Find Blog and check if it exists
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(400).json({ error: "Blog Not Found" });

    // Delete the associated images
    blog.image.forEach((imagePath) => {
      try {
        fs.unlinkSync(
          imagePath.slice(process.env.domain.length, imagePath.length)
        );
      } catch (err) {
        // Handle the error, e.g., log it or ignore it
        console.error("Error deleting file:", err);
      }
    });

    // Delete the blog itself
    await Blog.findByIdAndDelete(blogId);

    res.json({ success: "Blog Deleted Success" });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

// Update Blogs [PATCH: http://localhost:8000/api/post/blogs/:id] (register required)
route.patch(
  "/blogs/:id",
  checkPrivilege,
  upload.array("image", 4),
  async (req, res) => {
    try {
      const blogId = req.params.id;
      // Get old Blog
      const oldBlog = await Blog.findById(blogId);
      if (!oldBlog) {
        deleteImage(req.files);
        return res.status(404).json({ error: "Blog Not Found" });
      }

      const { categoryId, subcategoryId, title, subtitle, description } =
        req.body;

      // Initialize variables for image handling
      let newImages = oldBlog.image;

      // Handle image updates
      if (req.files.length > 0) {
        // Add new image paths with the full address
        newImages = req.files.map((file) => process.env.domain + file.path);

        // Delete old image files if they exist
        oldBlog.image.forEach((imagePath) => {
          try {
            fs.unlinkSync(
              imagePath.slice(process.env.domain.length, imagePath.length)
            );
          } catch (err) {
            // Handle the error, e.g., log it or ignore it
            console.error("Error deleting file:", err);
          }
        });
      }

      const updatedBlog = {
        categoryId,
        subcategoryId: subcategoryId ? subcategoryId : null,
        title,
        subtitle,
        description,
        image: newImages,
      };

      // Update category and subcategory information
      if (categoryId) {
        const category = await Category.findById(categoryId);
        if (category) {
          updatedBlog.categoryId = categoryId;
        }
      }

      const blog = await Blog.findByIdAndUpdate(
        blogId,
        { $set: updatedBlog },
        { new: true }
      );
      await blog.save();
      res.json({ success: "Blog Update Success", blog: blog });
    } catch (e) {
      if (req.files.length > 0) {
        deleteImage(req.files);
      }
      res.status(500).json({ error: "Internal Server Error " + e });
    }
  }
);

// Update Blogs like [PATCH: http://localhost:8000/api/post/blogs/like/:id]  (register required)
route.patch("/blogs/like/:id", fetchuser, async (req, res) => {
  try {
    // get old Blog
    const oldBlog = await Blog.findById(req.params.id);
    if (!oldBlog) {
      return res.status(404).json({ error: "Blog Not Found" });
    }
    const likeId = req.user.id;

    // to increase/decreasing like
    const reso = oldBlog.likeId.filter((e) => String(e) === String(likeId));
    if (reso.length <= 0) {
      Blog.updateOne(
        { _id: oldBlog.id },
        { $push: { likeId: mongoose.Types.ObjectId(likeId) } },
        (err, result) => {}
      );
      res.json({ success: "Like Success" });
    } else {
      Blog.updateOne(
        { _id: oldBlog.id },
        { $pull: { likeId: likeId } },
        { returnOriginal: false },
        (err, result) => {
          if (err) {
            console.error("Failed to remove userId:", err);
            return;
          }
        }
      );
      res.json({ success: "Dislike success" });
    }
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

module.exports = route;
