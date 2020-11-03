const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
.post((req,res) => {
  userController.create(req, res);
});
// Login route
router.route("/login")
.post((req, res) => {
  userController.findOneAndVerify(req, res);
});
// Get logged in user data
router.route("/user_data")
.get((req, res) => {
  userController.findOne(req, res);
});

module.exports = router;