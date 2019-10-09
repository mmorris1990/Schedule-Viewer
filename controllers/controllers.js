const db = require("../models");
const moment = require("moment");

module.exports = {

    // // GET the next Week's scheduled jobs
    getWeek: (req, res) => {

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
            .then(function (result) {
                console.log(result)
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // GET Today's or Tomorrow's scheduled jobs
    getDate: (req, res) => {
        // Replace '-' with '/' in order to get route and query into correct formats
        let dateFormatted = req.params.date.replace("-", "/");
        db.sequelize.query("SELECT salesOrder, company, dateNotes, dateDue, shipping FROM schedules WHERE dateDue = '" + dateFormatted + "'", { type: db.Sequelize.QueryTypes.SELECT })
            .then(function (result) {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // GET all tasks by user
    getTasks: (req, res) => {
        db.sequelize.query("SELECT id, name, dueDate, description FROM tasks WHERE UserId = " + req.params.id + " AND type = 'task'", { type: db.Sequelize.QueryTypes.SELECT })
            .then(function (result) {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // GET all projects by user
    getProjects: (req, res) => {
        db.sequelize.query("SELECT id, name, dueDate, description FROM tasks WHERE UserId = " + req.params.id + " AND type = 'project'", { type: db.Sequelize.QueryTypes.SELECT })
            .then(function (result) {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // UPDATE task by task id
    update: (req, res) => {
        console.log(req.body);
        db.Task.update({
            name: req.body.name,
            dueDate: req.body.dueDate,
            description: req.body.description
        }, {
            where: { id: req.params.id }
        })
            //------------ NEED TO ADD VALIDATION WHERE USER CAN ONLY UPDATE -THEIR- TASKS --------------
            .then(function (result) {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // CREATE a new task/project
    create: (req, res) => {
        console.log(req.body);
        db.Task.create({
            name: req.body.name,
            dueDate: req.body.dueDate,
            description: req.body.description,
            type: req.body.type,
            UserId: req.params.id
        })
            .then(function (result) {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // DELETE a task/project by id
    delete: (req, res) => {
        db.Task.destroy({ where: { id: req.params.id } })
            .then(function (result) {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};
