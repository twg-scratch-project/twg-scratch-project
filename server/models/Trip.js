const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide a name for your trip!'],
  },
  departureDate: {
    type: Date,
    // TODO: Remove default date
    default: Date.now,
    required: [true, 'Please provide a departure date.'],
  },
  numDays: {
    type: Number,
    required: [true, 'Please provide the number of days.'],
  },
  comments: {
    type: [{ user: String, body: String, date: Date }],
  },
  createdAt: Date,
});

module.exports = mongoose.model('Trip', tripSchema);
