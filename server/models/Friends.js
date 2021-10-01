const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  //link contacts to the user/inviter
  user: {
    //look into further
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    require: true,
    maxlength: [40, "Name cannot be more than 40 characters"],
  },
  email: {
    type: String,
    require: true,
    unique: true,
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
});

module.exports = mongoose.model("friend", FriendSchema);
