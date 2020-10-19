const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
  app.get("/api/Users", (req, res) => {
    db.Users.find()
      .then(data => res.json(data))
      .catch(err => res.status(422).end());
  });
  
  app.post("/api/Users", (req,res) => {
    db.Users.create({
      // firstName: "Test",
      // lastName: "Test",
      // email: "Test",
      // password: "Test",
      // city: "Test"
    }).then((data => {
      res.json(data);
      console.log(data);  
    })).catch(err => {
      res.json(err);
    });
  });
}



