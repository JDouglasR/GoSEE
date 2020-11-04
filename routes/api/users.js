const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
// Matches with "/api/user"
router.route("/").post((req, res) => {
  userController.create(req, res);
});
// Login route
router
  .route("/login")
  // .all(passport.authenticate("local"))
  .post((req, res) => {
    userController.findOneAndVerify(req, res);
  });
// Get logged in user data
router.route("/user_data").get((req, res) => {
  userController.findOne(req, res);
});

module.exports = router;
