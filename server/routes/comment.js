const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

router.post('/', commentController.addComment);

router.delete('/:id', commentController.deleteComment);

module.exports = router;
