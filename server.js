const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const MongoStore = require("connect-mongo")(session);

// Creating express app
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Users");
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "T{M.W7bZVxM'M#+z",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
