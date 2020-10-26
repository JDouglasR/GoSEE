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
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts"
    }
  ]
});  

const Users = mongoose.model("Users", UserSchema, "users");

module.exports = Users;