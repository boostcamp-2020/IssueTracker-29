const express = require('express');
const issueMiddleware = require('../middlewares/issue');
const commentMiddleware = require('../middlewares/comment');
const labelMiddleware = require('../middlewares/label');

const router = express.Router();

router.get('/', issueMiddleware.readAllIssues);
router.post('/', issueMiddleware.createIssue);
router.get('/label', labelMiddleware.readEveryIssueLabel);

router.get('/:issueid', issueMiddleware.readIssueByID);
router.put('/:issueid', issueMiddleware.updateIssue);
router.delete('/:issueid', issueMiddleware.deleteIssue);
router.put('/:issueid/state', issueMiddleware.toggleIssueState);

router.get('/:issueid/comment', commentMiddleware.readCommentsByIssueID);
router.post('/:issueid/comment', commentMiddleware.createComment);

router.get('/:issueid/label/', labelMiddleware.readLabelInIssue);
router.post('/:issueid/label/:labelid', labelMiddleware.createLabelInIssue);
router.delete('/:issueid/label/:labelid', labelMiddleware.deleteLabelInIssue);


module.exports = router;
