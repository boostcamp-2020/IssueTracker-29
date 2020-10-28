const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const milestoneRouter = require('./milestone');
const issueRouter = require('./issue');
const commentRouter = require('./comment');
const labelRouter = require('./label');

router.use('/user', userRouter);
router.use('/milestone', milestoneRouter);
router.use('/issue', issueRouter);
router.use('/comment', commentRouter);
router.use('/label', labelRouter);

module.exports = router;
