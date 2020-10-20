const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
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
})

const Posts = mongoose.model("Posts", PostSchema);

module.exports = Posts;