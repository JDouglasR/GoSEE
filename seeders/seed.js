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

let postSeed = [
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },{
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },{
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "#Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "#Chicago",
  }                  
]

db.Users.deleteMany({})
  .then(() => db.Posts.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Promise.all([
//   db.Users.create(userSeed),
//   db.Posts.create(postSeed)
// ]).then(([users, posts]) => {
//   console.log("Success!");
  
// })

  