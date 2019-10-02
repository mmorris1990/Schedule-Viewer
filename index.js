require("dotenv");
const express = require("express");
const path = require("path");
const db = require("./models")
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
var session = require('express-session');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./config/passport")(passport);

app.use(session({
  secret: 'some-secret',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./routes/api/routes')(app, passport);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`API server running @ https://localhost:${PORT}`);
  });
});

module.exports = app;


// require("dotenv").config();
// const express = require("express");
// const db = require("./models");
// const Sequelize = require('sequelize');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Routes

// const syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }


// // Create instance of Sequelize
// const sequelize = new Sequelize('ee_schedule', 'root', '7283', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Testing Sequelize connection
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log('Connection has been established successfully.');
// //   })
// //   .catch(err => {
// //     console.error('Unable to connect to the database:', err);
// //   });

//   // Starting the server, syncing our models ------------------------------------/
//   db.sequelize.sync(syncOptions).then(function () {
//     app.listen(PORT, function () {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//         );
//       });
//     });
//     require("./routes/apiRoutes")(app);

//     module.exports = app;
