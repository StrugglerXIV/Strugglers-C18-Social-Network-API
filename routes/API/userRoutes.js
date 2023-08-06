const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");


router.route("/")
.get(getAllUsers)
.post(createSingleUser);

router.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(removeFriend);

router.route("/:id")
.get(getSingleUser)
.put(updateSingleUser)
.delete(deleteSingleUser);

module.exports = router;