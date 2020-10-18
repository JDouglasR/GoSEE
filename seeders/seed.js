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
    city: "Cleveland"
    
  },
  {
    firstName: "Michael",
    lastName: "Jordan",
    email: "mj@hotmail.com",
    password: "Bulls1234",
    city: "Chicago"    
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
