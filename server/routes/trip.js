const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

router.post('/createtrip', tripController.createTrip);

router.post('/comment', tripController.addComment);

module.exports = router;
