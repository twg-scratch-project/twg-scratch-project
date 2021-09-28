const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let configure = require("../routes/config/globalVariables");
require("dotenv").config();

const User = require("../models/Users");

//@route        POST api/users
//@desc         Register a user
//@access     Public
const userLogin = (req, res, next) => {
  // checks are set by express-validator
  console.log(`inside login`.magenta);
  // fine grained control over the error message of each validator, you may specify them using the .withMessage() method.
  [
    check("name", "Please add name").not().isEmpty().trim().escape(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters")
      .isLength({ min: 6 })
      .withMessage("must be at least 6 chars long")
      .matches(/\d/)
      .withMessage("must contain a number"),
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
        //if no user found, a new instance of the user is made
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
          configure.jwtSecret,
          {
            //num in seconds
            expiresIn: 360000,
          },
          (err, token) => {
            if (err) throw err;
            return res.status(201).json({ token });
          }
        );
      } catch (e) {
        console.error(e.message, `in users.js`.magenta);
        res.status(500).send("Server error");
      }
    };
};

//@route        PATCH api/users
//@desc         Update a user
//@access     Public

const updateUser = (req, res, next) => {};

//@route        DELETE api/users
//@desc         Delete a user
//@access     Private

const deleteUser = (req, res, next) => {
  //user must be signed in to delete themselves
};

const getAllUsers = (req, res, next) => {};
module.exports = { userLogin, updateUser, deleteUser };
