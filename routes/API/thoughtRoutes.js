const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createSingleThoughts,
  updateSingleThought,
  deleteSingleThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

router.route("/")
  .get(getAllThoughts)
  .post(createSingleThoughts);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateSingleThought)
  .delete(deleteSingleThought);

router.route("/:thoughtId/reactions")
  .post(addReaction);

router.route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;