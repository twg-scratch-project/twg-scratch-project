const express = require('express');
const router = express.Router();

const expenseRouter = require('./expense')

router.use('/expense', expenseRouter);


module.exports = router;