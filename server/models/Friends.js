const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  //link contacts to the user/inviter
  //using references to relate documents and populate them
  user: {
    //stores a target id
    type: mongoose.Schema.Types.ObjectId,
    //Mosh
    // id: "ref",
    //name of target collection
    ref: "Users",
    required: true,
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
