require("dotenv").config();
const { check, validationResult } = require("express-validator");
const Friend = require("../models/Friends");

const getAllFriends = (req, res, next) => {};

const getASingleFriend = (req, res, next) => {};

const friendCreator = (req, res, next) => {
  // checks are set by express-validator
  //Sanitizing
  [
    check("name", "Please add name").not().isEmpty().trim().escape(),
    check("email", "Please include a valid email").isEmail().normalizeEmail(),
  ],
    async (req, res) => {
      //data sent to the route
      //only for routes that accept data
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, email, mobile } = req.body;
      try {
        let Friend = await Friend.findOne({ email });
        if (Friend)
          return res.status(400).json({ msg: "Friend already exists" });
        //if no Friend found, a new instance of the Friend is made
        Friend = new Friend({ name, email, mobile });
        await Friend.save();
      } catch (e) {
        console.error(e.message, `in Friends.js`.magenta);
        res.status(500).send("Server error");
      }
    };
};

const friendRemover = (req, res, next) => {};

const friendUpdater = (req, res, next) => {};

module.exports = {
  getAllFriends,
  getASingleFriend,
  friendCreator,
  friendRemover,
  friendUpdater,
};
