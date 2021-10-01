const express = require('express');
const router = express.Router();
const colors = require('colors');
const mongoose = require('mongoose');
const authController = require('../controllers/authController');

const { check, validationResult, body } = require('express-validator');
const friendController = require('../controllers/friendController');
const Friends = require('../models/Friends');

//@route        GET all api/friends
//@desc         Get user's friends
//@access     Private
router.get('/', authController.protect, friendController.getAllFriends);

//@route        GET one api/friends
//@desc         Get user's friends
//@access     Private

router.get('/:id', (req, res) => res.send("Get one of user's friends"));

//@route        POST api/friends
//@desc         Add new friends
//@access     Private
router.post(
  '/makeAFriend',
  // checks are set by express-validator
  //Sanitizing
  [
    check('name', 'Please add name').not().isEmpty().trim().escape(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail(),
  ],
  async (req, res) => {
    //data sent to the route
    //only for routes that accept data
    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, mobile } = req.body;
    // console.log(req.body.user);
    try {
      let friend = await Friends.findOne({ mobile });

      if (friend) {
        console.log(`${friend}`.zebra);
        return res.status(400).json({ msg: 'friend already exists' });
      }
      //if no friend found, a new instance of the friend is made
      friend = new Friends({
        user: new mongoose.Types.ObjectId(),
        name,
        email,
        mobile,
      });
      console.log(`${friend}`.bgBlue);
      await friend.save();
      return res.status(201).json({ msg: 'Friend Made' });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  },
);

//@route        PUT api/friends
//@desc         Update user's friends
//@access     Private
router.put('/:id', (req, res) => res.send(`Update friend ${req.params.id}`));

//@route        DELETE api/friends
//@desc         delet user's friend
//@access     Private
router.delete('/:id', (req, res) => res.send(`Delete friend ${req.params.id}`));

module.exports = router;
