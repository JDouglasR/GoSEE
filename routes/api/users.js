const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
.post((req,res) => {
  userController.create(req, res);
})

router.route("/login")
.post((req, res) => {
  userController.findOneAndVerify(req, res);
})

// router.route("/login", passport.authenticate("local"))
// .post((req, res) => {
   
//   res.json({email: req.users.email})
  
// })
  // .get(postsController.findAll)
  // .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;