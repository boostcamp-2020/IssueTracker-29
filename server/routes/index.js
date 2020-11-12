const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const milestoneRouter = require('./milestone');
const issueRouter = require('./issue');
const commentRouter = require('./comment');
const labelRouter = require('./label');
const assignsRouter = require('./assigns');
const uploadRouter = require('./upload');
const tokenRouter = require('../middlewares/auth/token');

router.use('/user', userRouter);
router.use('/', tokenRouter.verifyToken);
router.use('/milestone', milestoneRouter);
router.use('/issue', issueRouter);
router.use('/comment', commentRouter);
router.use('/label', labelRouter);
router.use('/assigns', assignsRouter);
router.use('/upload', uploadRouter);

module.exports = router;
