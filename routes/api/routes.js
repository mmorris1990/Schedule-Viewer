const path = require("path");
const router = require("express").Router();
const controllers = require("../../controllers/controllers");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// jwtVerify.confirmToken, jwtVerify.verifyToken, 

// Matches with "/api/schedule/week"
router.route("/schedule/week").get(controllers.getWeek);

// Matches with "/api/schedule/:date"
router.route("/schedule/:date").get(controllers.getDate);

// Matches with "api/task/task/:id"
router.route("/task/task/:id").get(controllers.getTasks);

// Matches with "api/task/project/:id"
router.route("/task/project/:id").get(controllers.getProjects);

// Matches with "api/task/:id" 
router.route("/task/project/:id").put(controllers.update);

// Matches with "api/task/task"
router.route("/task/task/:id").post(controllers.create);

// Matches with "api/task/:id"
router.route("/task/:id").delete(controllers.delete);

module.exports = router;
