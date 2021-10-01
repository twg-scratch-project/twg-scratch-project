const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

router.post('/createtrip', tripController.createTrip);

router.route('/:id').get(tripController.getTrip).patch(tripController.updateTrip);

module.exports = router;
