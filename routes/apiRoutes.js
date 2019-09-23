var db = require("../models");

module.exports = function (app) {
  // GET Today's scheduled jobs
  app.get("/api/schedule/:today", function (req, res) {
    db.sequelize.query("SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue = '" + req.params.today + "'"
      // DUE DATE = TODAY
      ,
      { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET Tomorrows's scheduled jobs
  app.get("/api/schedule/:tomorrow", function (req, res) {
    db.sequelize.query("SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue = '" + req.params.tomorrow + "'"
      // DUE DATE = TOMORROW
      ,
      { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET the next Week's scheduled jobs
  app.get("/api/schedule/:week", function (req, res) {
    db.sequelize.query("SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue = '" + req.params.week + "'"
      // DUE DATE = TODAY + 7 DAYS
      ,
      { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET all tasks by user
  app.get("/api/task/task", function (req, res) {
    db.sequelize.query("SELECT name, dueDate, description FROM tasks WHERE UserId = '" + req.user.id + " AND type = task", { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET all projects by user
  app.get("/api/task/project", function (req, res) {
    db.sequelize.query("SELECT name, dueDate, description FROM tasks WHERE UserId = '" + req.user.id + " AND type = project", { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // UPDATE task by task id
  app.put("/api/task/task", function (req, res) {
    db.Task.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      //------------ NEED TO ADD VALIDATION WHERE USER CAN ONLY UPDATE THEIR TASKS --------------
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // UPDATE project by task id
  app.put("/api/task/project", function (req, res) {
    db.Task.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      //------------ NEED TO ADD VALIDATION WHERE USER CAN ONLY UPDATE THEIR PROJECTS --------------
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
      UserId: req.user.id
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
      UserId: req.user.id
    })
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // DELETE a task by id
  app.delete("/api/task/:id", function (req, res) {
    db.Task.destroy({ where: { id: req.params.id } })
      .then(function (dbTask) {
        res.json(dbTask);
      });
  });

  // GET User information

  // CREATE a new user
};
