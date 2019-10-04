const router = require("express").Router();
const apiRoutes = require("./routes");

// Schedule Routes
router.use("/schedule", apiRoutes);
// Task & Project Routes
router.use("/tasks", apiRoutes);

module.exports = router;
