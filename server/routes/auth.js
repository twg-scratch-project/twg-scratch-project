const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// @route        GET api/auth
// @desc         Get logged in user
// @access     Private
router.get('/', authController.isLoggedIn, (req, res) =>
  res.send(`Logged in as ${res.locals.userID}`),
);

// @route        POST api/auth
// @desc         Auth user and get token
// @access     Public
router.post('/', authController.logIn, (req, res) =>
  res.status(200).json({
    status: 'success',
    data: {
      user: res.locals.user,
    },
  }),
);

// @route        GET api/auth/logout
// @desc         Log out the current user
// @access     Private
router.get('/logout', authController.logout, (req, res) => res.send('Logged out'));

module.exports = router;
