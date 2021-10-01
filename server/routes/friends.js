const express = require("express");
const router = express.Router();

const friendController = require("../controllers/friendController");

//@route        GET all api/friends
//@desc         Get user's friends
//@access     Private
router.get("/", (req, res) => res.send("Get all of user's friends"));

//@route        GET one api/friends
//@desc         Get user's friends
//@access     Private

router.get("/:id", (req, res) => res.send("Get one of user's friends"));

//@route        POST api/friends
//@desc         Add new friends
//@access     Private
router.post("/", (req, res) => res.send("Add friend"));

//@route        PUT api/friends
//@desc         Update user's friends
//@access     Private
router.put("/:id", (req, res) => res.send(`Update friend ${req.params.id}`));

//@route        DELETE api/friends
//@desc         delet user's friend
//@access     Private
router.delete("/:id", (req, res) => res.send(`Delete friend ${req.params.id}`));

module.exports = router;
