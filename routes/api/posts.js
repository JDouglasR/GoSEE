const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/books"
router.route("/")
  .get(postsController.findAll)
  // .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
