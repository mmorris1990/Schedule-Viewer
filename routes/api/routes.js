const path = require("path");
const router = require("express").Router();
const controllers = require("../../controllers/controllers");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// Matches with "/api/schedule/week"
router.route("api/schedule/week").get(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.getWeek);

// Matches with "/api/schedule/:date"
router.route("api/schedule/:date").get(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.getDate);

// Matches with "api/task/task/:id"
router.route("api/task/task/:id").get(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.getTasks);

// Matches with "api/task/project/:id"
router.route("api/task/project/:id").get(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.getProjects);

// Matches with "api/task/:id" 
router.route("api/task/project/:id").put(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.update);

// Matches with "api/task/task"
router.route("api/task/task").post(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.create);

// Matches with "api/task/:id"
router.route("api/task/:id").delete(jwtVerify.confirmToken, jwtVerify.verifyToken, controllers.delete);

module.exports = router;
