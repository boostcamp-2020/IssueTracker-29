const express = require('express');
const issueMiddleware = require('../middlewares/issue');
const commentMiddleware = require('../middlewares/comment');

const router = express.Router();

router.get('/', issueMiddleware.readAllIssues);

router.post('/', issueMiddleware.createIssue);

router.get('/:issueid', issueMiddleware.readIssueByID);

router.put('/:issueid', issueMiddleware.updateIssue);

router.delete('/:issueid', issueMiddleware.deleteIssue);

router.put('/:issueid/state', issueMiddleware.toggleIssueState);

// add or get comment by issue
router.get('/:issueid/comment', commentMiddleware.readCommentsByIssueID);

router.post('/:issueid/comment', commentMiddleware.createComment);


module.exports = router;
