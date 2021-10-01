const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

router.post('/', commentController.addComment);

module.exports = router;
