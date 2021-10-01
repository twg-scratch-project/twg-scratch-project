const express = require('express');
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.post('/', authController.protect, commentController.addComment);

router.delete('/:id', authController.protect, commentController.deleteComment);

module.exports = router;
