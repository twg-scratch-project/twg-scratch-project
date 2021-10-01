const express = require('express');

const router = express.Router();

const authRouter = require('./auth');
const userRouter = require('./users');
const tripRouter = require('./trip');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/trip', tripRouter);

module.exports = router;
