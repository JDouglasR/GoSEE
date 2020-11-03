let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/Users", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Entry 1
const post1 = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "The journey of a thousand miles begins with a single step. ― Lao Tzu",
  hashtag: "Seattle"
});
const post1A = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "The world is a book and those who do not travel read only one page. ― St. Augustine",
  hashtag: "Chicago"
});
const post1B = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Not all those who wander are lost. ― J.R.R. Tolkien",
  hashtag: "San Diego"
});
const post1C = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Wherever you go becomes a part of you somehow. ― Anita Desai",
  hashtag: "Miami"
});

post1.save(function (err) {
  if (err) return handleError(err);

  const user1 = new db.Users({
    firstName: "Ana",
    lastName: "Wagner",
    email: "ana.wagner@example.com",
    city: "Cleveland",
    posts: [post1._id, post1A._id, post1B._id, post1C._id]
  });

  user1.save(function (err) {
    if (err) return handleError(err);
  });
});

post1A.save(function (err) {
  if (err) return handleError(err);
});
post1B.save(function (err) {
  if (err) return handleError(err);
});
post1C.save(function (err) {
  if (err) return handleError(err);
});

db.Users
.findOne({ email: "ana.wagner@example.com" })
.populate('post1, post1A, post1B, post1C')
.exec(function (err, post){
  if (err) return handleError(err);
  console.log("One record inserted!");
});

// Entry 2
const post2 = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "A good traveler has no fixed plans and is not intent on arriving. ― Lao Tzu",
  hashtag: "Seattle"
});
const post2A = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Travel brings power and love back into your life. ― Rumi Jalalud-Din",
  hashtag: "Chicago"
});
const post2B = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Travel far enough, you meet yourself. ― David Mitchell",
  hashtag: "San Diego"
});
const post2C = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "I read; I travel; I become ― Derek Walcott",
  hashtag: "Miami"
});

post2.save(function (err) {
  if (err) return handleError(err);

  const user2 = new db.Users({
    firstName: "Abigail",
    lastName: "Henry",
    email: "abigail.henry@example.com",
    city: "Cleveland",
    posts: [post2._id, post2A._id, post2B._id, post2C._id]
  });

  user2.save(function (err) {
    if (err) return handleError(err);
  });
});

post2A.save(function (err) {
  if (err) return handleError(err);
});
post2B.save(function (err) {
  if (err) return handleError(err);
});
post2C.save(function (err) {
  if (err) return handleError(err);
});

db.Users
.findOne({ email: "abigail.henry@example.com" })
.populate('post2, post2A, post2B, post2C')
.exec(function (err, post){
  if (err) return handleError(err);
  console.log("One record inserted!");
});

// Entry 3
const post3 = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "To travel is to live. ― Hans Christian Andersen",
  hashtag: "Boston"
});
const post3A = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Some beautiful paths can't be discovered without getting lost. ― Erol Ozan",
  hashtag: "Denver"
});
const post3B = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "The journey itself is my home. ― Matsuo Basho",
  hashtag: "New Orleans"
});
const post3C = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "A man travels the world over in search of what he needs and returns home to find it. ― George Augustus Moore",
  hashtag: "Las Vegas"
});

post3.save(function (err) {
  if (err) return handleError(err);

  const user3 = new db.Users({
    firstName: "Debra",
    lastName: "Stevens",
    email: "debra.stevens@example.com",
    city: "Chicago",
    posts: [post3._id, post3A._id, post3B._id, post3C._id]
  });

  user3.save(function (err) {
    if (err) return handleError(err);
  });
});

post3A.save(function (err) {
  if (err) return handleError(err);
});
post3B.save(function (err) {
  if (err) return handleError(err);
});
post3C.save(function (err) {
  if (err) return handleError(err);
});

db.Users
.findOne({ email: "debra.stevens@example.com" })
.populate('post3, post3A, post3B, post3C')
.exec(function (err, post){
  if (err) return handleError(err);
  console.log("One record inserted!");
});

// Entry 4
const post4 = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "The world is a book, and those who don't travel only read one page. ― St Augustine",
  hashtag: "Boston"
});
const post4A = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Actually, the best gift you could have given her was a lifetime of adventures.  – Lewis Carroll",
  hashtag: "Denver"
});
const post4B = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "If you think adventure is dangerous, try routine, it is lethal. – Paul Coelho",
  hashtag: "Las Vegas"
});
const post4C = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Travel is still the most intense mode of learning. – Kevin Kelly",
  hashtag: "New Orleans"
});

post4.save(function (err) {
  if (err) return handleError(err);

  const user4 = new db.Users({
    firstName: "Alfredo",
    lastName: "Howard",
    email: "alfredo.howard@example.com",
    city: "Chicago",
    posts: [post4._id, post4A._id, post4B._id, post4C._id,]
  });

  user4.save(function (err) {
    if (err) return handleError(err);
  });
});

post4A.save(function (err) {
  if (err) return handleError(err);
});
post4B.save(function (err) {
  if (err) return handleError(err);
});
post4C.save(function (err) {
  if (err) return handleError(err);
});

db.Users
.findOne({ email: "alfredo.howard@example.com" })
.populate('post4, post4A, post4B, post4C')
.exec(function (err, post){
  if (err) return handleError(err);
  console.log("One record inserted!");
});

// Entry 5
const post5 = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Don’t tell me how educated you are, tell me how much you have travelled. – Mohammed",
  hashtag: "Buffalo"
});
const post5A = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Some beautiful paths can’t be discovered without getting lost. – Erol Ozan",
  hashtag: "Philadelphia"
});
const post5B = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "I would rather own little and see the world, than own the world and see little of it. – Alexander Sattler",
  hashtag: "Las Vegas"
});
const post5C = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "We travel not to escape life but for life not to escape us. – Anonymous",
  hashtag: "Boston"
});

post5.save(function (err) {
  if (err) return handleError(err);

  const user5 = new db.Users({
    firstName: "Richard",
    lastName: "May",
    email: "richard.may@example.com",
    city: "Los Angeles",
    posts: [post5._id, post5A._id, post5B._id, post5C._id,]
  });

  user5.save(function (err) {
    if (err) return handleError(err);
  });
});

post5A.save(function (err) {
  if (err) return handleError(err);
});
post5B.save(function (err) {
  if (err) return handleError(err);
});
post5C.save(function (err) {
  if (err) return handleError(err);
});

db.Users
.findOne({ email: "richard.may@example.com" })
.populate('post5, post5A, post5B, post5C')
.exec(function (err, post){
  if (err) return handleError(err);
  console.log("One record inserted!");
});

// Entry 6
const post6 = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "The world is waiting for you. Good Luck. Travel Safe. Go! – Phil Keoghan",
  hashtag: "Cleveland"
});
const post6A = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Wherever you go, go with all your heart. – Confucius",
  hashtag: "Pittsburgh"
});
const post6B = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Man cannot discover new oceans unless he has the courage to lose sight of the shore. – Andre Gide",
  hashtag: "Seattle"
});
const post6C = new db.Posts({
  _id: new mongoose.Types.ObjectId(),
  post: "Adventure is worthwhile. – Aesop",
  hashtag: "Chicago"
});
post6.save(function (err) {
  if (err) return handleError(err);

  const user6 = new db.Users({
    firstName: "Ralph",
    lastName: "Harper",
    email: "ralph.harper@example.com",
    city: "Los Angeles",
    posts: [post6._id, post6A._id, post6B._id, post6C._id,]
  });

  user6.save(function (err) {
    if (err) return handleError(err);
  });
});

post6A.save(function (err) {
  if (err) return handleError(err);
});
post6B.save(function (err) {
  if (err) return handleError(err);
});
post6C.save(function (err) {
  if (err) return handleError(err);
});

db.Users
.findOne({ email: "ralph.harper@example.com" })
.populate('post6, post6A, post6B, post6C')
.exec(function (err, post){
  if (err) return handleError(err);
  console.log("One record inserted!");
});