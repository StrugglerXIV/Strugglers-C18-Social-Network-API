const { User } = require("../models");

const userController = {
    async getAllUsers(req, res) {
        try {
            const UserData = await User.find().select("-__v");
            res.json(UserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const userData = await User.findOne({ _id: req.params.id })
                .select("-__v")
                .populate("friends")
                .populate("thoughts");

            if (!userData) {
                return res.status(404).json({ message: "No user found with this id!" });
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteSingleUser(req, res) {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.id });
            if (!userData) {
                return res.status(404).json({ message: "No user found with this id!" });
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createSingleUser(req, res) {
      try {
        const userData = await User.create(req.body);
        res.json(userData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
     async updateSingleUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
    async addFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
              { _id: req.params.userId },
              { $addToSet: { friends: req.params.friendId } },
              { new: true }
            );
            if (!userData) {
              return res.status(404).json({ message: "No user found with this id" });
            }
            res.json(userData);
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
    },
    async removeFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
              { _id: req.params.userId },
              { $pull: { friends: req.params.friendId } },
              { new: true }
            );
            if (!userData) {
              return res.status(404).json({ message: "No user found with this id!" });
            }
            res.json(userData);
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
    },
}

module.exports = userController;