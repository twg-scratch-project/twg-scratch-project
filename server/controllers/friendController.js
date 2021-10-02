const mongoose = require("mongoose");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const Friend = require("../models/Friends");
const AppError = require("../utils/appError");

// @route        GET all api/friends
// @desc         Get user's friends
// @access     Private
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
    //console.error(`e.message in userController`.bgYellow);
    return next(err);
  }
};

//@route        GET all api/friends
//@desc         Get all of user's friends
//@access     Private
//h
const getAllUsersFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const friendsUser = await Friend.find({ user: id });
    res.status(200).send(friendsUser);
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

//@route        GET one api/friends
//@desc         Get user's friends
//@access     Private
const getASingleFriend = async (req, res, next) => {
  const friend = await Friend.findOne({ user: req.params.id });
  if (!friend) {
    return next(new AppError("Friend not Found.", 404));
  }
  res.send(friend.name);
};

const friendRemover = async (req, res, next) => {
  try {
    const friend = await Friend.findOneAndRemove(req.params.id);
    if (!friend) {
      return next(new AppError("Friend not Found.", 404));
    }
    //console.log(`${friend}`.bgGreen);
    return res.json({ msg: "Friend Found" });
  } catch (e) {
    return next(e);
  }
};

const friendUpdater = async (req, res, next) => {
  const { id } = req.params;
  try {
    const friend = await Friend.findById({ id });
    friend.name = req.body.name;
    friend.email = req.body.email;
    await friend.save();
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getAllFriends,
  getAllUsersFriends,
  getASingleFriend,
  friendRemover,
  friendUpdater,
};
