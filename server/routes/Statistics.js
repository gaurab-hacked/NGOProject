const checkPrivilege = require("../middleware/checkPrivilege");
const User = require("../models/Auth");
const router = require("express").Router();

router.get("/total-user/all", checkPrivilege, async (req, res) => {
  try {
    // Use your User model to count the total number of users
    const totalUsers = await User.countDocuments();

    res.json({ totalUsers });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while counting total users." });
  }
});

router.get("/total-user/thismonth", checkPrivilege, async (req, res) => {
  try {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );

    const totalUsers = await User.countDocuments({
      date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
    });

    res.json({ totalUsers });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while counting total users." });
  }
});
module.exports = router;
