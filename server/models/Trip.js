const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  departureDate: {
    type: Date,
    default: Date.now,
  },
  numDays: {
    type: Number,
  }
});

module.exports = mongoose.model("Trip", tripSchema);