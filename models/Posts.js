const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: String,
  },
  hashtag: {
    type: String,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Posts = mongoose.model("Posts", PostSchema, "posts");

module.exports = Posts;
