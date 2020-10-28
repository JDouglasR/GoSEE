const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router.route("/")
.get((req,res) => {
  postsController.findAll(req, res);
})

// Route for getting posts with city name
router.route("/:city")
.get((req, res) => {
  postsController.findById(req, res)
})



  // .get(postsController.findAll)

  // .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
