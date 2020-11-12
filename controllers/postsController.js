const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const user = require("./userController");
const session = require("express-session");

module.exports = {
  // Get all posts from database
  findAll: function (req, res) {
    db.Users.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "posts",
          foreignField: "_id",
          as: "posts",
        },
      },
      {
        $unwind: "$posts",
      },
      // {
      //   $sort:{
      //     $posts:{ day: -1} 
      //   },
      // },
    ])
      .then((dbUsers) => {
        return res.json(dbUsers);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Get all posts with city name
  findById: function (req, res) {
    const cityName = req.params.city;
    db.Users.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "posts",
          foreignField: "_id",
          as: "posts",
        },
      },
      {
        $unwind: "$posts",
      },
    ])
      .then((dbUsers) => {
        var x = dbUsers.filter((city) => {
          return city.posts.hashtag.toLowerCase() === cityName.toLowerCase();
        });
        res.json(x);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Find all posts from one user
  findByUser: function (req, res) {
    const cityName = req.params.city;
    db.Users.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "posts",
          foreignField: "_id",
          as: "posts",
        },
      },
      {
        $unwind: "$posts",
      },
    ])
      .then((dbUsers) => {
        var x = dbUsers.filter((city) => {
          return city.posts.hashtag.toLowerCase() === cityName.toLowerCase();
        });
        res.json(x);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Save user posts
  savePost: function (req, res) {
    db.Posts.create(req.body)
      .then(({ _id }) =>
        db.Users.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { posts: _id } },
          { new: true }
        )
      )
      .then(() => module.exports.findAll(req, res));
  },

  
//   deletePost: function (req, res) {
//     console.log("postController")
//     db.Users.deleteOne({ _id : "" }, function (err) {
//       if (err) return handleError(err);
//   })
// }
  


};
