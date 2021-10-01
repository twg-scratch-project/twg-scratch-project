const Trip = require('../models/Trip');
const AppError = require('../utils/appError');

exports.createTrip = async (req, res, next) => {
  try {
    const { name, departureDate, numDays } = req.body;
    // TODO: Adjust to work data that we decide to use.
    const newTrip = await Trip.create({ name, departureDate, numDays });

    return res.status(201).json({
      status: 'success',
      data: {
        trip: newTrip,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.addComment = async (req, res, next) => {
  try {
    const trip = await Trip.findById(req.params.id);

    const { user, body, date } = req.body;

    trip.comments.push({ user, body, date });

    console.log(trip.comments);

    return res.status(200);
  } catch (err) {
    next(err);
  }
};
