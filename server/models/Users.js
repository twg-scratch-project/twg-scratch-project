const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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
  // do we want time stamps instead?
  //{timestamps: true}
  // will use a middleware to slugify
  slug: String,
});

module.exports = mongoose.model("user", UserSchema);
