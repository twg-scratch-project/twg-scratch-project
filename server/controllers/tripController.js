const { body, validationResult } = require('express-validator/check');
const Trip = require("../models/Trip");
const AppError = require('../utils/appError');


const tripController = {};

tripController.create = async (req, res, next) => {

  const {name, departureDate, numDays} = req.body;
  try {
    const trip = new Trip({name, departureDate, numDays});
    await trip.save();
    res.locals.savedTrip = trip;
    next();
  } catch (e) {
    res.status(500).send("Server error");
  }
  
};

tripController.update = async (req, res, next) => {
  next();
};

tripController.validate = [
  body('name', 'Name doesn\'t exist').exists(),
  body('departureDate', 'Invalid departureDate').exists().isDate(),
  body('numDays', 'numDays not provided').exists().isInt(),
  (req, res, next) => {
    const validationErrs = validationResult(req);
    if (!validationErrs.isEmpty()) {
      const err = new AppError('Validation error for trip', 500, validationErrs);
      next(err);
    } else {
      next();
    }
  }
];

module.exports = tripController;