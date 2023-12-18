const checkPrivilege = require("../middleware/checkPrivilege");
const User = require("../models/Auth");
const router = require("express").Router();
const Contact = require("../models/Contact");
const NewsEvents = require("../models/NewsEvents");
const Project = require("../models/Project");

// !==== [GET] http://localhost:8000/api/statistics/total-users [registration required] ====
router.get("/total-users", checkPrivilege, async (req, res) => {
  try {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    const totalUsers = await User.countDocuments();
    const usersThisMonth = await User.countDocuments({
      date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
    });

    res.json({ totalUsers, usersThisMonth });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while counting total users." });
  }
});

// !==== [GET] http://localhost:8000/api/statistics/total-message [registration required] ====
router.get("/total-message", checkPrivilege, async (req, res) => {
  try {
    // Use your Contact model to count the total number of messages
    const totalMessages = await Contact.countDocuments();

    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );

    // Use your User model to count the number of users for the current month
    const usersThisMonth = await User.countDocuments({
      date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
    });

    res.json({ totalMessages, usersThisMonth });
  } catch (error) {
    res.status(500).json({
      error:
        "An error occurred while counting total messages and users this month.",
    });
  }
});

// !==== [GET] http://localhost:8000/api/statistics/total-projects [registration required] ====
router.get("/total-projects", checkPrivilege, async (req, res) => {
  try {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );

    // Use your Project model to count the total number of projects
    const totalProjects = await Project.countDocuments();

    // Use your Project model to count the number of projects for the current month
    const projectsThisMonth = await Project.countDocuments({
      date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
    });

    res.json({ totalProjects, projectsThisMonth });
  } catch (error) {
    res.status(500).json({
      error:
        "An error occurred while counting total projects and projects this month.",
    });
  }
});

// !==== [GET] http://localhost:8000/api/statistics/total-news-and-events [registration required] ====
router.get("/total-news-and-events", checkPrivilege, async (req, res) => {
  try {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );

    // Use your NewsEvents model to count the total number of news and events
    const totalNewsAndEvents = await NewsEvents.countDocuments();

    // Use your NewsEvents model to count the number of news and events for the current month
    const newsAndEventsThisMonth = await NewsEvents.countDocuments({
      date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
    });

    res.json({ totalNewsAndEvents, newsAndEventsThisMonth });
  } catch (error) {
    res.status(500).json({
      error:
        "An error occurred while counting total news and events and news and events this month.",
    });
  }
});

module.exports = router;
