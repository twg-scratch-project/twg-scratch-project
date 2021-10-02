const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Comment must have a user.'],
  },

  body: { type: String, required: [true, 'Comment must have a body!'] },

  //! Remove default date
  Date: { type: Date, default: Date.now() },

  createdAt: { type: Date, default: Date.now() },

  trip: {
    type: mongoose.Schema.ObjectId,
    ref: 'Trip',
    required: [true, 'Comment must belong to a trip'],
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
