const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const milestoneRouter = require('./milestone');
const issueRouter = require('./issue');
const commentRouter = require('./comment');

router.use('/user', userRouter);
router.use('/milestone', milestoneRouter);
router.use('/issue', issueRouter);
router.use('/comment', commentRouter);

module.exports = router;
