const db = require("../models");
const express = require("express");
const session = require("express-session");

module.exports = {    
    
    create: function(req, res) {
        db.Users
        .create(req.body)
        .then(dbUsers => {
        res.json(dbUsers); 
        module.exports.userId = dbUsers._id;               
        })
        .catch(err => {
            res.status(401).json(err)
        });
    },
    // Get user info based on whose logged in
    findOne: function(req, res) {
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
              return res.json(dbUsers);
            })
            .catch((err) => {
              res.json(err);
            });
        
    },
    // Verify user
    findOneAndVerify: function(req, res) {
        db.Users
        .findOne({ email: req.body.email}, function (err, user) {
            
            // test a matching password
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                else if (isMatch && isMatch === true) {
                    
                    res.json(user);                  
                } else {
                    return res.status(401).send();                        
                }                    
            });              
        })           
        .catch(err => res.json(err));        
    },    
}
