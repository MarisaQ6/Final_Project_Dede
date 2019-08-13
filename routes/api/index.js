const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const drinksRoutes = require("./drinks");


//User Routes
router.use("/users", userRoutes);
router.use("/drinks", drinksRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
