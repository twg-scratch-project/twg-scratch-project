const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/getuser/:email', apiController.findUser, (req, res, next) => {
  const user = res.locals.user;
  res.status(200).json({user});
})
module.exports = router;