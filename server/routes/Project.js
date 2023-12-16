const express = require("express");
const route = express.Router();
const Project = require("../models/Project");
const checkPrivilege = require("../middleware/checkPrivilege");
const upload = require("../middleware/uploadInBlog");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const deleteImage = (imagePath) => {
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }
};

const getFullImagePath = (relativePath) => {
  return process.env.domain + relativePath;
};

route.get("/project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Project.findById(id);
    if (!data) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

route.get("/projects", async (req, res) => {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

route.post(
  "/project",
  checkPrivilege,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, active, category, url } = req.body;
      const findTitle = await Project.findOne({ title });
      if (findTitle) {
        deleteImage(req.file.path);
        return res.status(400).json({ error: "Project Title Already Exists" });
      }
      if (!req.file) {
        deleteImage(req.file.path);
        return res.status(400).json({ error: "Please Upload an Image" });
      }

      const imagePath = getFullImagePath(req.file.path);

      const projectItem = {
        title,
        url,
        image: imagePath,
        active,
        category,
      };
      const newProject = await new Project(projectItem);
      await newProject.save();
      res.json({ success: "Project Added Successfully", project: newProject });
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error " + e });
    }
  }
);

route.delete("/project/:id", checkPrivilege, async (req, res) => {
  try {
    const projectId = req.params.id;
    const checkProject = await Project.findById(projectId);
    if (!checkProject) {
      return res.status(400).json({ error: "Project Not Exist" });
    }

    const imagePath = path.join(
      __dirname,
      "..",
      checkProject.image.slice(process.env.domain.length)
    );

    await Project.findByIdAndDelete(projectId);
    deleteImage(imagePath);
    res.json({ success: "Project Data Deleted" });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

route.patch(
  "/project/:id",
  checkPrivilege,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, active, category, url } = req.body;
      const projectId = req.params.id;
      const checkProject = await Project.findById(projectId);
      if (!checkProject) {
        return res.status(400).json({ error: "Project Not Exist" });
      }

      let updateProject = {};
      if (title) updateProject.title = title;
      if (url) updateProject.url = url;
      if (active) updateProject.active = active;
      if (category) updateProject.category = category;
      let imagePath = checkProject.image;

      if (req.file) {
        deleteImage(
          path.join(
            __dirname,
            "..",
            checkProject.image.slice(process.env.domain.length)
          )
        );
        imagePath = getFullImagePath(req.file.path);
      }

      updateProject.image = imagePath;

      const updatedProject = await Project.findByIdAndUpdate(
        projectId,
        { $set: updateProject },
        { new: true }
      );
      res.json({ success: "Project Update Success", project: updatedProject });
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error " + e });
    }
  }
);

module.exports = route;
