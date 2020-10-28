const express = require('express');
const commentMiddleware = require('../middlewares/comment');

const router = express.Router();

router.get('/:issueid/comment', commentMiddleware.readCommentsByIssueID);

router.post('/:issueid/comment', commentMiddleware.createComment);

module.exports = router;
