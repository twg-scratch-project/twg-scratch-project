const express = require('express');
const dotenv = require('dotenv').config();
const router = express.Router();

const authRouter = require('./auth');
const userRouter = require('./users');
const tripRouter = require('./trip');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/trips', tripRouter);
router.get('/mapboxToken', (req, res, next) => {
  console.log('process.env.MAPBOX: ', process.env.MAPBOX);
  return res.send(process.env.MAPBOX);
});
module.exports = router;
