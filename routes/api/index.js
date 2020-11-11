const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");

// Post routes
router.use("/posts", postRoutes);
router.use("/user", userRoutes);
router.use("/auth", postRoutes);

module.exports = router;
