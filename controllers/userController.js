const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const session = require("express-session");
const passport = require("passport");

module.exports = {
  //   create: function (req, res) {
  //     db.Users.create(req.body)
  //       .then((dbUsers) => {
  //         res.json(dbUsers);
  //       })
  //       .catch((err) => {
  //         res.status(400).json(err.message);
  //       });
  //   },
  // Get user info based on whose logged in
  findOne: function (req, res) {
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
  findOneAndVerify: (req, res) => {
    db.Users.findOne({ email: req.body.email }, function (err, user) {
      // test a matching password
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) throw err;
        else if (isMatch && isMatch === true) {
          res.json(user);
        } else {
          return res.status(401).send();
        }
      });
    }).catch((err) => res.json(err));
  },

  // Verify all fields for registration.
  registerAuth: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        passwordCheck,
        city,
      } = req.body;

      // Validate
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !passwordCheck ||
        !city
      )
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered" });
      if (password.length < 8)
        return res
          .status(400)
          .json({ msg: "Password must be longer than 8 characters." });
      if (password !== passwordCheck)
        return res.status(400).json({ msg: "Both passwords must match." });
      const existingUser = await db.Users.findOne({ email: email });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists" });
      if (!firstName || !lastName)
        return res
          .status(400)
          .json({ msg: "Both name fields must be filled." });
      if (!city)
        return res.status(400).json({ msg: "You must enter your city." });

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new Users({
        firstName,
        lastName,
        email,
        password: passwordHash,
        city,
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  loginAuth: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validate
      if (!email || !password)
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered" });

      const user = await db.Users.findOne({ email: email });
      if (!user)
        return res.status(400).json({ msg: "No user exists with this email." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid credentials." });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
