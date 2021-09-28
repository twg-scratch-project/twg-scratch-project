const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let configure = require("../routes/config/globalVariables");
require("dotenv").config();

const User = require("../models/Users");

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
module.exports = { updateUser, deleteUser };
