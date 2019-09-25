const db = require("../models");
const moment = require("moment");

module.exports = function (app) {
  // GET Today's or Tomorrow's scheduled jobs
  app.get("/api/schedule/:date", function (req, res) {
    // Replace '-' with '/' in order to get route and query into correct formats
    let dateFormatted = req.params.date.replace("-", "/");
    db.sequelize.query("SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue = '" + dateFormatted + "'", { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // SEQUELIZE METHOD NOT WORKING?? ----------------------------------
  // app.get("api/schedule/:today", (req, res) => {
  //   console.log("hi");
  //   let date = req.params.today.replace("-", "/");
  //   db.Schedule.findAll({
  //     attributes: ["salesOrder", "company", "dateNotes", "dateDue", "shipping"],
  //     where: { dateDue: date }
  //   })
  //     .then(dbSchedule => {
  //       res.json(dbSchedule);
  //     })
  //     .catch(err => {
  //       throw err;
  //     })
  // });

  //------------------------------ FIX ME ------------------------------------
  // // GET the next Week's scheduled jobs
  app.get("/api/schedule/week/:date", function (req, res) {
    db.sequelize.query("SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue = '" + req.params.week + "'"
      // DUE DATE = TODAY + 7 DAYS
      ,
      { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET all tasks by user
  app.get("/api/task/task/:id", function (req, res) {
    //------------------------- Change req.user.id to req.user.id once passport is up
    db.sequelize.query("SELECT name, dueDate, description FROM tasks WHERE UserId = " + req.params.id + " AND type = 'task'", { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET all projects by user
  app.get("/api/task/project/:id", function (req, res) {
    //------------------------- Change req.user.id to req.user.id once passport is up
    db.sequelize.query("SELECT name, dueDate, description FROM tasks WHERE UserId = " + req.params.id + " AND type = 'project'", { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // UPDATE task by task id
  app.put("/api/task/task/:id", function (req, res) {
    console.log(req.body);
    db.Task.update({
      name: req.body.name,
      dueDate: req.body.dueDate,
      description: req.body.description
    }, {
      where: { id: req.params.id }
    })
      //------------ NEED TO ADD VALIDATION WHERE USER CAN ONLY UPDATE -THEIR- TASKS --------------
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // CREATE a new task
  app.post("/api/task/task", function (req, res) {
    console.log(req.body);
    db.Task.create({
      name: req.body.name,
      dueDate: req.body.dueDate,
      description: req.body.description,
      type: "task",
      //------------------------- Change req.user.id to req.user.id once passport is up
      UserId: req.body.UserId
    })
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // CREATE a new project
  app.post("/api/task/project", function (req, res) {
    console.log(req.body);
    db.Task.create({
      name: req.body.name,
      dueDate: req.body.dueDate,
      description: req.body.description,
      type: "project",
      //------------------------- Change req.user.id to req.user.id once passport is up
      UserId: req.body.UserId
    })
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // DELETE a task/project by id
  app.delete("/api/task/:id", function (req, res) {
    db.Task.destroy({ where: { id: req.params.id } })
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // GET User information

  // CREATE a new user
};
