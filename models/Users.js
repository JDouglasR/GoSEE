const mongoose = require("mongoose");
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

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
    trim: true,
    bcrypt: true
  },
  city: {
    type: String,
    trim: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts"
    }
  ]
});  

UserSchema.plugin(require('mongoose-bcrypt'));

const Users = mongoose.model("Users", UserSchema, "users");

module.exports = Users;