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
    //trips: [TripSchema]
  }
);

// const TripSchema = new mongoose.Schema(
//   {
//   locationName: String, 
//   coordinates: {latitude: String, longitude: String},
//   startDate: {
//       type: Date,
//       required: true
//     },
//   endDate: {
//     type: Date,
//     required: true
//   },
//   description: String, 
//   }
// )


module.exports = mongoose.model("user", UserSchema);
