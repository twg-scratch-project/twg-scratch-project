const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expenseController');

router.get('/list', expenseController.sampleApp, (req, res) => {
    return res.status(200).send('/api/expense/list OK');
});


module.exports = router;