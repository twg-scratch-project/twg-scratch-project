const express = require("express");
const router = express.Router();

//@route        GET api/contacts
//@desc         Get user's contacts
//@access     Private
router.get("/", (req, res) => res.send("Get user's contacts"));

//@route        POST api/contacts
//@desc         Add new contacts
//@access     Private
router.post("/", (req, res) => res.send("Add contact"));

//@route        PUT api/contacts
//@desc         Update user's contacts
//@access     Private
router.put("/:id", (req, res) => res.send(`Update contact ${req.params.id}`));

//@route        DELETE api/contacts
//@desc         delet user's contact
//@access     Private
router.delete("/:id", (req, res) =>
  res.send(`Delete contact ${req.params.id}`)
);

module.exports = router;
