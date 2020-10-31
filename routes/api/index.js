const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");


// Post routes
router.use("/posts", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
