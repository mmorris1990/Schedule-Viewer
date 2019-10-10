const express = require("express");
const passport = require("passport");
require('./config/passport');
const db = require("./models");
const jwt = require("jsonwebtoken");
const jwtSecret = require('./config/jwtConfig');
const routes = require("./routes");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const User = require("./models/user");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('*', function (req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.options('*', cors());

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
// if (process.env.NODE_ENV === "production") {
// }
// // Add routes, both API and view

app.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error("error here" + err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      res.status(200).send({ message: 'user created' });
    }
  })(req, res, next);
});

app.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      User.findOne({
        username: req.body.username
      }).then(user => {
        const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
          expiresIn: 60 * 60,
        });
        res.status(200).send({
          auth: true,
          token,
          message: 'user found & logged in',
        });
      });
    }
  })(req, res, next);
});

app.get(
  "/auth/google", (req, res, next) => {
    console.log("here....")
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })(req, res, next)
  }
);

app.get(
  "/auth/google/callback", (req, res, next) => {
    console.log("callback");
    passport.authenticate("google", (err, user, info) => {
      console.log("user" +user);
      const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
        expiresIn: 60 * 60,
      });
      res.cookie('JWT', token)
      res.redirect("/schedule")
    })(req, res, next)
  }
);

app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`API server running @ https://localhost:${PORT}`);
  });
});

module.exports = app;
