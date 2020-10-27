const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Users
          .create(req.body)
          .then(dbUsers => res.json(dbUsers))
          .catch(err => res.json(err));
    }
}