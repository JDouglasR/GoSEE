const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/books"
router.route("/")
<<<<<<< HEAD
  .get(postsController.findAll)
=======
.get((req,res) => {
  console.log(req);
  postsController.findAll(req, res);
})
  // .get(postsController.findAll)
>>>>>>> 5f04adbb4417fe2a75f5df61b37e206dff983848
  // .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
