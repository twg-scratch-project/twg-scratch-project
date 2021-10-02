const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");

const { check, validationResult } = require("express-validator");
const Friends = require("../models/Friends");
const friendController = require("../controllers/friendController");
const authController = require("../controllers/authController");

//Without mergeParams, there would be no access to the userId from any of the routes connected to this Router.
const router = require("express").Router({ mergeParams: true });
router.use("/:friendsId/users", require("./users"));

//@route        GET all api/friends
//@desc         Get user's friends
//@access     Private
router.get("/", authController.protect, friendController.getAllFriends);

//@route        GET one api/friends
//@desc         Get user's friends
//@access     Private

router.get("/:id", authController.protect, friendController.getASingleFriend);

//@route        GET user from friend
//@desc         Get  friend's user
//@access     Private
router.get(
  "/:id/all",
  authController.protect,
  friendController.getAllUsersFriends
);

//@route        POST api/friends
//@desc         Add new friends
//@access     Private
router.post(
  "/:id",
  authController.protect,
  // checks are set by express-validator
  //Sanitizing
  [
    check("name", "Please add name").not().isEmpty().trim().escape(),
    check("email", "Please include a valid email").isEmail().normalizeEmail(),
  ],
  async (req, res) => {
    //data sent to the route
    //only for routes that accept data
    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, mobile, user } = req.body;
    try {
      let friend = await Friends.findOne({ mobile });
      if (friend) {
        return res.status(400).json({ msg: "friend already exists" });
      }
      //if no friend found, a new instance of the friend is made
      friend = await Friends.create({
        user: req.params.id,
        name,
        email,
        mobile,
      });
      await friend.save();
      return res.status(201).json({ msg: "Friend Made" });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }
);

//@route        PATCH api/friends
//@desc         Update user's friends
//@access     Private
router.patch("/:id", authController.protect, friendController.friendUpdater);

//@route        DELETE api/friends
//@desc         delete user's friend
//@access     Private
router.delete("/:id", authController.protect, friendController.friendRemover);

module.exports = router;
