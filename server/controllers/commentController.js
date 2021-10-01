const Comment = require('../models/Comment');
const AppError = require('../utils/appError');

exports.addComment = async (req, res, next) => {
  try {
    const { user, body, date } = req.body;

    const newComment = await Comment.create({
      trip: req.params.tripId,
      user: req.user,
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

exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findByIdAndDelete(id);

    if (!comment) {
      return next(new AppError('No document found with that ID', 404));
    }

    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return next(err);
  }
};
