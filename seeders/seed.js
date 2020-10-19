let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/Users", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let userSeed = [
  {
    firstName: "Josh",
    lastName: "Panakkal",
    email: "josh.panakkal3122@hotmail.com",
    password: "Hello1234",
    city: "Cleveland",
    posts: {
      post: "Fall brings crazy colors as the leaves are changing in #Cleveland!",
      hashtag: "#Cleveland",
    }    
  },
  {
    firstName: "Michael",
    lastName: "Jordan",
    email: "mj@hotmail.com",
    password: "Bulls1234",
    city: "Chicago",
    posts: {
      post: "Traveling to #Chicago to play basketball!",
      hashtag: "#Chicago",
    }      
  },
  {
    firstName: "Scottie",
    lastName: "Pippen",
    email: "pippen@hotmail.com",
    password: "Bulls1234",
    city: "Chicago",
    posts: {
      post: "It gets cold in #Chicago",
      hashtag: "#Chicago",
    }      
  }    
];

db.Users.deleteMany({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  