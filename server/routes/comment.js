const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/createcomment', commentController.addComment);

module.exports = router;
