const path = require("path");
const axios = require("axios");
const router = require("express").Router();
const apiRoutes = require("./api/routes.js");

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
