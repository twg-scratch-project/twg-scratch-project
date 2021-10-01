require("dotenv").config();
const { check, validationResult } = require("express-validator");
const Friend = require("../models/Friends");

//@route        GET all api/friends
//@desc         Get user's friends
//@access     Private
const getAllFriends = async (req, res) => {
  try {
    const friends = await Friend.find();
    if (!friends.length) {
      res
        .status(404)
        .json({ message: "No friends found. Invite some friends" });
    }
    return res
      .status(200)
      .json({ success: true, number: friends.length, data: friends });
  } catch (e) {
    console.error(`e.message in userController`.bgYellow);
    res.status(500).json({ e: e.message });
  }
};

//@route        GET one api/friends
//@desc         Get user's friends
//@access     Private
const grabFriendsUser = (req, res) => {};

//@route        GET one api/friends
//@desc         Get user's friends
//@access     Private
const getASingleFriend = (req, res) => {};

const friendRemover = (req, res, next) => {};

const friendUpdater = (req, res, next) => {};

module.exports = {
  getAllFriends,
  getASingleFriend,

  friendRemover,
  friendUpdater,
};
