const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({  
  firstName: {
    type: String,
    trim: true
    // required: true
  },
  lastName: {
    type: String,
    trim: true
    // required: true
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  posts: [{
    day: {
      type: Date,
      default: Date.now
    },
    post: {
      type: String
    },
    hashtag: {
      type: String
    }
  }]
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

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
