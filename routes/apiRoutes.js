const db = require("../models");
const moment = require("moment");

module.exports = function (app) {
  //------------------------------ FIX ME ------------------------------------
  // // GET the next Week's scheduled jobs
  app.get("/api/schedule/week/", function (req, res) {

    // Creates an array with the next 7 dates in the correct format
    let week = [1, 2, 3, 4, 5, 6, 7];
    let dates = week.map(getDates => {
      let dueDates = moment().add(getDates, "days").format("M/D");

      return dueDates;
    });

    console.log(dates);

    let weekQuery = "SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue IN "
    weekQuery += "('" + dates[0] + "' , '" + dates[1] + "' , '" + dates[2] + "' , '" + dates[3] + "' , '" + dates[4] + "' , '" + dates[5] + "' , '" + dates[6] + "') ORDER BY dateDUE";
    db.sequelize.query(weekQuery, { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        console.log(dbSchedule)
        res.json(dbSchedule);
      });
  });

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
  //attributes: ["salesOrder", "company", "dateNotes", "dateDue", "shipping"],
  //     where: { dateDue: date }
  //   })
  //     .then(dbSchedule => {
  //  app.get("api/schedule/:today", (req, res) => {
  //   console.log("hi");
  //   let date = req.params.today.replace("-", "/");
  //   db.Schedule.findAll({
  //           res.json(dbSchedule);
  //     })
  //     .catch(err => {
  //       throw err;
  //     })
  // });

  // GET all tasks by user
  app.get("/api/task/task/:id", function (req, res) {
    //------------------------- Change req.params.id to req.user.id once passport is up
    db.sequelize.query("SELECT name, dueDate, description FROM tasks WHERE UserId = " + req.params.id + " AND type = 'task'", { type: db.Sequelize.QueryTypes.SELECT })
      .then(function (dbSchedule) {
        res.json(dbSchedule);
      });
  });

  // GET all projects by user
  app.get("/api/task/project/:id", function (req, res) {
    //------------------------- Change req.params.id to req.user.id once passport is up
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
      //------------------------- Change req.body.UserId to req.user.id once passport is up
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
      //------------------------- Change req.body.UserId to req.user.id once passport is up
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
