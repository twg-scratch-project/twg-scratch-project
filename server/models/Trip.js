const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a name for your trip!"],
    },
    departureDate: {
      type: Date,
      //! Remove default date
      default: Date.now,
      required: [true, "Please provide a departure date."],
    },
    numDays: {
      type: Number,
      required: [true, "Please provide the number of days."],
    },

    createdAt: Date,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual populate
tripSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "trip",
  localField: "_id",
});

module.exports = mongoose.model("Trip", tripSchema);
