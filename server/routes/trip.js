const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

router.use('/:tripId/comments', require('./comment'));

router.post('/createtrip', tripController.createTrip);

router.route('/:id').get(tripController.getTrip).patch(tripController.updateTrip);

module.exports = router;
