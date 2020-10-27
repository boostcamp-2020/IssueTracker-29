const express = require('express');
const commentMiddleware = require('../middlewares/comment');

const router = express.Router();

router.get('/:issueid/comment', commentMiddleware.readCommentsByIssueID);

module.exports = router;
