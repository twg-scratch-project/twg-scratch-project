const express = require("express");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const colors = require("colors");

let configure = require("../routes/config/globalVariables");
require("dotenv").config();

const User = require("../models/Users");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
//Without mergeParams, there would be no access to the userId from any of the routes connected to this Router.
const router = require("express").Router({ mergeParams: true });
//router.use("/:userId/friends", require("./friends"));

// include json body parser
router.use(express.json({ extended: false }));

//@route        GET api/user/
//@desc         Get all users
//@access     Private (for Coordinator),
//add auth middleware!
router.get("/", authController.protect, userController.getAllUsers);

// @route        GET api/user/:id
// @desc         Get a user
// @access     Public (because verifying user)
router.patch("/verifyUser", userController.verifyUser);

// @route        POST api/users
// @desc         Register a user
// @access     Public
router.post(
  "/login",
  // checks are set by express-validator
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    // data sent to the route
    // only for routes that accept data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, mobile } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: "User already exists" });
      //if no user found?
      //a new instance of the user is made
      user = await new User({
        name,
        email,
        password,
        mobile,
        friend: req.params.friendId,
      });
      //before sending user to the database, encrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      // user.save returns a promise
      await user.save();

      // payload to be sent in the Jwot
      const payload = {
        user: {
          id: user.id,
        },
      };

      // to send a token, it must be signed
      jwt.sign(
        payload,
        configure.jwtSecret,
        {
          // num in seconds
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (e) {
      console.error(e.message, "in users.js".magenta);
      next(e);
    }
  }
);

// @route        PATCH api/users
// @desc         Update a user
// @access     Public (because updating a password)

router.patch(
  "/updatePassword",
  [
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  authController.protect,
  userController.updatePassword
);

// @route        DELETE api/users
// @desc         Delete a user
// @access     Private
// add middleware

router.delete(
  "/deleteUser/:id",
  authController.protect,
  userController.deleteUser
);

module.exports = router;
