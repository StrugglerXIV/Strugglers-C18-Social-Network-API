const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users (GET, POST)
router.route("/").get(getAllUsers)
.post(createSingleUser);

// /api/users/:userId/friends/:friendId (POST, DELETE)
router.route("/:userId/friends/:friendId")
// .post(addFriend).delete(deleteFriend);

// /api/users/:id (GET, PUT, DELETE)
router.route("/:id")
// .get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;