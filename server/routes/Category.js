const express = require("express");
const route = express.Router();
const checkPrivilege = require("../middleware/checkPrivilege");
const Category = require("../models/Category");
require("dotenv").config();

// get categories [GET: http://localhost:8000/api/category/categories]  (register not required)
route.get("/categories", async (req, res) => {
  try {
    const data = await Category.find();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get category by ID [GET: http://localhost:8000/api/category/category/:id]  (register not required)
route.get("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findById(id);
    if (!data) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post category [POST: http://localhost:8000/api/category/category]  (register required)
route.post("/category", checkPrivilege, async (req, res) => {
  try {
    const { categoryName, displayOrder, active } = req.body;
    const checkExistence = await Category.findOne({ categoryName });

    if (checkExistence) {
      return res.status(400).json({ error: "Category Already Exists" });
    }

    const category = new Category({
      categoryName,
      displayOrder,
      active,
    });

    await category.save();
    res.json({ success: "Category Added", data: category });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

// Update category [PATCH: http://localhost:8000/api/category/category/:id]  (register required)
route.patch("/category/:id", checkPrivilege, async (req, res) => {
  try {
    const { categoryName, displayOrder, active } = req.body;
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const newCategory = {};

    if (categoryName) {
      newCategory.categoryName = categoryName;
    }
    if (displayOrder) {
      newCategory.displayOrder = displayOrder;
    }
    if (typeof active === "boolean") {
      newCategory.active = active;
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: newCategory },
      { new: true }
    );

    res.json({
      success: "Category update successful",
      category: updatedCategory,
    });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

// delete category [DELETE: http://localhost:8000/api/category/category/:id]  (register required)
route.delete("/category/:id", checkPrivilege, async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await Category.findByIdAndDelete(categoryId);

    res.json({ success: "Category Deleted Successfully" });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error " + e });
  }
});

module.exports = route;
