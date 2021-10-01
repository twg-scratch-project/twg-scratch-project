const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    name: {
      type: String,
      required: [true, 'Comment must have a name.'],
    },

    body: { type: String, required: [true, 'Comment must have a body!'] },

    Date: { type: Date, required: [true, 'Comment must refer to a date.'] },

    createdAt: { type: Date, default: Date.now() },
  },
  trip: {
    type: mongoose.Schema.ObjectId,
    ref: 'Trip',
    required: [true, 'Comment must belong to a trip'],
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
