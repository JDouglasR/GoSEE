const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/posts"
router
  .route("/")
  // .all(isAuthenticated)
  .get((req, res) => {
    postsController.findAll(req, res);
  })
  .post((req, res) => {
    postsController.savePost(req, res);
  })
  .delete((req, res) => {
    console.log("delete post")
    postsController.deletePost(req.body.id);
  })

// Route for getting posts with city name
router.route("/:city").get((req, res) => {
  console.log("api/post.js")
  postsController.findById(req, res);
});






// .get(postsController.findAll)

// .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
