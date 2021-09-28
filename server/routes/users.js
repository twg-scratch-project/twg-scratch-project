const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/login", userController.userLogin);

//router.post("/login");

module.exports = router;
