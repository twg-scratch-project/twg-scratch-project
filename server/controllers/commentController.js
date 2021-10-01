const Comment = require('../models/Comment');

exports.addComment = async (req, res, next) => {
  try {
    const { user, body, date } = req.body;

    const newComment = await Comment.create({
      trip: req.params.tripId,
      user,
      body,
      date,
    });

    return res.status(200).json({
      status: 'success',
      data: {
        comment: newComment,
      },
    });
  } catch (err) {
    next(err);
  }
};
