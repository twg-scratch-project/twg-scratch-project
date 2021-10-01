const express = require('express');
const tripController = require('../controllers/tripController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use('/:tripId/comments', require('./comment'));

router.post('/createtrip', authController.protect, tripController.createTrip);

router
  .route('/:id')
  .get(authController.protect, tripController.getTrip)
  .patch(authController.protect, tripController.updateTrip);

module.exports = router;
