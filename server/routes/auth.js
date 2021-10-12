const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.post('/login', (req, res) => {
  res.status(200).json('logged in') 
});

router.post('/signup', apiController.createUser, (req, res) => {
  res.status(200).json('signed up')
});

module.exports = router;