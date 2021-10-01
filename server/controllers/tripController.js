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

exports.getTrip = async (req, res, next) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findById(id).populate('comments');

    if (!trip) {
      return next(new AppError('No trip found with that ID.', 404));
    }

    return res.status(200).json({
      status: 'success',
      data: {
        trip,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTrip = (Model) => async (req, res, next) => {
  const trip = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!trip) {
    return next(new AppError('No trip found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: {
        trip,
      },
    },
  });
};
