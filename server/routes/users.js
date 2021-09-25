const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let config = require("./config/globalVariables");
require("dotenv").config();

// must require model of the user in the route
const User = require("../models/Users");

//@route        POST api/users
//@desc         Register a user
//@access     Public

router.post(
  "/",
  // checks are set by express-validator
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    //data sent to the route
    //only for routes that accept data
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
      user = new User({ name, email, password, mobile });
      //before sending user to the database, encrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //user.save returns a promise
      await user.save();

      //payload to be sent in the Jwot
      const payload = {
        user: {
          id: user.id,
        },
      };

      //to send a token, it must be signed
      jwt.sign(
        payload,
        config.jwtSecret,
        {
          //num in seconds
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
      //res.send("User saved");
    } catch (e) {
      console.error(e.message, `in users.js`.magenta);
      res.status(500).send("Server error");
    }
    //return res.send("passed");
  }
);

module.exports = router;
