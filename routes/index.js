const router = require("express").Router();
const apiRoutes = require("./API");

router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send("This is not a place you wanna be in.");
});
module.exports = router;