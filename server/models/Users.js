const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    cityOfOrigin: {
      type: String,
    },
    countryOfOrigin: {
      type: String,
    },
    mobile: {
      type: String,
      require: true,
      unique: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Reverse populate with virtuals
//for calc values, virtuals for functional updates
UserSchema.virtual("friends", {
  ref: "Friend",
  localField: "_id",
  foreignField: "User",
  //gives an arr for all the friends for the user
  justOne: false,
});

module.exports = mongoose.model("User", UserSchema);
