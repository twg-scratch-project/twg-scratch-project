const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let configure = require("../routes/config/globalVariables");
require("dotenv").config();
const colors = require("colors");

const User = require("../models/Users");

//@route        PATCH api/users
//@desc         Update a user
//@access     Public (because updating a password)

const updatePassword = async (req, res, next) => {
  try {
    const user = await User.findOne(req.params.name, req.body, { new: true });

    if (!user) {
      res.status(404).json({ message: "User Not Found" });
      throw new Error("User not Found");
    }

    if (!req.body.password) {
      return res.status(404).json({ message: "Password Required" });
    }

    await user.save();
    return res.status(200).json({
      status: "success",
      data: {
        password: req.body.password,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e.message,
    });
  }
};

//@route        DELETE api/users
//@desc         Delete a user
//@access     Private

const deleteUser = async (req, res, next) => {
  //user must be signed in to delete themselves
  try {
    const users = await User.findOneAndDelete({ name: req.body.name });
    res.status(201).send("user deleted");
  } catch (e) {
    res.status(404).send("User not found");
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res
      .status(200)
      .json({ success: true, number: users.length, data: users });
  } catch (e) {
    console.error(`e.message in userController`.bgYellow);
    res.status(500).json({ e: e.message });
  }
};

//@route        GET api/user/:id
//@desc         Get a user
//@access     Public (because verifying user)

const verifyUser = async (req, res, next) => {
  try {
    console.log(`${req.body.name}.f`);
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ success: true, number: user.length, data: user });
  } catch (e) {
    console.error(`e.message in userController`.bgYellow);
    res.status(500).json({ e: e.message });
  }
};
module.exports = { updatePassword, deleteUser, getAllUsers, verifyUser };
