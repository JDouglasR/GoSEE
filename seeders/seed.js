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
    post: "We wander for distraction, but we travel for fulfilment. – Hilaire Belloc",
    hashtag: "Chicago",
  },
  {
    post: "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open. – Jawaharial Nehru",
    hashtag: "Chicago",
  },
  {
    post: "Travel expands the mind and fills the gap. – Sheda Savage",
    hashtag: "Cleveland",
  },
  {
    post: "Travel makes one modest. You see what a tiny place you occupy in the world. – Gustave Flaubert",
    hashtag: "Cleveland",
  },
  {
    post: "Time flies. It’s up to you to be the navigator. – Robert Orben",
    hashtag: "Albany",
  },
  {
    post: "The world is full of magic things, patiently waiting for our senses to grow sharper. – W.B. Yeats",
    hashtag: "Albany",
  },{
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },{
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  },
  {
    post: "It gets cold in #Chicago",
    hashtag: "Chicago",
  },
  {
    post: "Traveling to #Chicago to play basketball!",
    hashtag: "Chicago",
  }                  
]

db.Posts.deleteMany({})
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

  