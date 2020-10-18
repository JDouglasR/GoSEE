const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
  // url string for thumbnail image
  // thumbnail: {
  //   type: String,
  //   default: ""
  // },
  // // url for recipe web page - unique index
  // href: {
  //   type: String,
  //   default: "",
  //   unique: true
  // },

  // // Not all ingredients, just the recommended ingredients from scraped web pages
  // // from which seed data was sourced
  // ingredients: [String]
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
