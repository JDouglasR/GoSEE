// eslint-disable-next-line no-irregular-whitespace
// Requiring our models and passport as we've configured it​
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create(req.body)

      .then(() => {
        res.redirect("/members");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Route for posting all user challenge data to database
  app.post("/api/walking", (req, res) => {
    // console.log(req.body);
    db.allChallenges
      .create({
        challenge: req.body.challenge,
        goal: req.body.goal,
        miles: req.body.miles,
        duration: req.body.duration,
        steps: req.body.steps,
        UserId: req.body.UserId
      })
      .then(walking => {
        res.json(walking);
      });
  });

  // Route for getting all user challenge data from database
  // app.get("/api/all-stats", (req, res) => {
  //   db.allChallenges.findAll({}).then(allStats => {
  //     // console.log(allStats);
  //     res.json(allStats);

  app.get("/api/walking", (req, res) => {
    db.allChallenges.findAll({}).then(walking => {
      // console.log(allStats);
      res.json(walking);

      //   // Maps all database information
      //   const newArray = allStats.map(x => x.dataValues);

      //   // Filters out all data with RUN
      //   // const filterArray = newArray.filter(y => {
      //   //   return y.challenge === "run";
      //   // });

      //   // Filter out all data with WALK
      //   const filterArrayUserId = newArray.filter(y => {
      //     return y.UserId === 8;
      //   });
      // });

      // console.log(filterArrayUserId);
    });
  });
};
