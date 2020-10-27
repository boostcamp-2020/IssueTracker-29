const express = require('express');
const commentMiddleware = require('../middlewares/comment');

const router = express.Router();

router.put('/:commentid', commentMiddleware.updateComment);

router.delete('/:commentid', commentMiddleware.deleteComment);

module.exports = router;
