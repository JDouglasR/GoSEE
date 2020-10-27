const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");


// Gets all User data
module.exports = {
  // Get all posts from database
  findAll: function(req, res) {
    db.Posts
<<<<<<< HEAD
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
=======
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
>>>>>>> 5f04adbb4417fe2a75f5df61b37e206dff983848

  }
}

  /* This variable is used to store the users' MongoDB id which will be used   
  when adding posts*/
  // var userId;

  /* Post request uses Project 2 form data to add user to database. Also updates 
  userId variable with id*/
  // app.post("/api/signup", (req, res) => {
  //   db.Users.create(req.body)
  //     .then(dbUsers => {
  //       console.log(dbUsers._id);
  //       userId = dbUsers._id;
  //     })
  //     .catch(({message}) => {
  //       console.log(message);
  //     });
  // });

  // Post request to add posts to database and update user collection
  // app.post("/submit", ({body}, res) => {
  //   db.Posts.create(body)
  //     .then(({_id}) => db.Users.findOneAndUpdate({_id: userId}, { $push: { posts: _id } }, { new: true }))
  //     .then(dbUsers => {
  //       res.json(dbUsers);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // Get all posts for user
  // app.get("/posts", (req, res) => {
  //   db.Posts.find()
  //     .then(dbPost => {
  //       res.json(dbPost);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // })

  // Route to get all posts using a city variable (ex/ cleveland)
  // app.get("/posts/:city", (req, res) => {
  //   const cityName = req.params.city;
  //   db.Users.aggregate([
  //     {
  //       $lookup:
  //       {
  //           from: "posts",
  //           localField: "posts",
  //           foreignField: "_id",
  //           as: "posts"
  //       }
  //     },
  //     {
  //       $unwind: "$posts"
  //     }
  // ])
  // .then(dbUsers => {
  //   var x = dbUsers.filter(city => {
  //     return city.posts.hashtag.toLowerCase() === cityName.toLowerCase();
  //   })
  //       res.json(x);        
  //     })   
  //   .catch(err => {
  //     res.json(err);
  //   });
  // });


  // Get user
  // app.get("/user", (req, res) => {
  //   db.Users.find({})
  //     .then(dbUsers => {
  //       res.json(dbUsers);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // Get all users with their posts
  // app.get("/populated", (req, res) => {
  //   db.Users.aggregate([
  //       {
  //         $lookup:
  //         {
  //         from: "posts",
  //         localField: "posts",
  //         foreignField: "_id",
  //         as: "posts"
  //         }
  //       },
  //       {
  //         $unwind: "$posts"
  //       }
  //   ])
  //   .then(dbUsers => {
  //       res.json(dbUsers);        
  //       })   
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  




