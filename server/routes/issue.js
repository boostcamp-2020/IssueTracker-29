const express = require('express');
const issueMiddleware = require('../middlewares/issue');
const commentMiddleware = require('../middlewares/comment');
const labelMiddleware = require('../middlewares/label');
const assignsMiddleware = require('../middlewares/assigns');
const milestoneMiddleware = require('../middlewares/milestone');

const router = express.Router();

router.get('/', issueMiddleware.readAllIssues);
router.post('/', issueMiddleware.createIssue);
router.put('/state', issueMiddleware.updateIssueState);
router.get('/label', labelMiddleware.readEveryIssueLabel);

router.get('/:issueid', issueMiddleware.readIssueByID);
router.put('/:issueid', issueMiddleware.updateIssue);
router.delete('/:issueid', issueMiddleware.deleteIssue);

router.get('/:issueid/comment', commentMiddleware.readCommentsByIssueID);
router.post('/:issueid/comment', commentMiddleware.createComment);

router.get('/:issueid/label/', labelMiddleware.readLabelInIssue);
router.post('/:issueid/label/:labelid', labelMiddleware.createLabelInIssue);
router.delete('/:issueid/label/:labelid', labelMiddleware.deleteLabelInIssue);

router.get('/:issueid/assigns', assignsMiddleware.readAssignsById);
router.post('/:issueid/assigns', assignsMiddleware.createAssigns);

router.put('/:issueid/milestone/:milestoneid', milestoneMiddleware.updateIssueMilestone);

module.exports = router;
