const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const config = require("config");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// Creating express app
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const db = config.get("mongoURI");
mongoose
  .connect(
    db ||
      process.env.MONGODB_CONNECTION_STRING ||
      process.env.MONGODB_URI ||
      "mongodb://localhost/Users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
