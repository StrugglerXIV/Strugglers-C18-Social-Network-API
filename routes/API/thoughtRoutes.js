const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createSingleThoughts,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts (GET, POST)
router.route("/").get(getAllThoughts)
.post(createSingleThoughts);

// /api/thoughts/:thoughtId (GET, PUT, DELETE)
// router
//   .route("/:thoughtId")
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions (POST)
router.route("/:thoughtId/reactions")
// .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId (DELETE)
router.route("/:thoughtId/reactions/:reactionId")
// .delete(deleteReaction);

module.exports = router;