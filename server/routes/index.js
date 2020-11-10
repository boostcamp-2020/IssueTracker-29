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
// HELP: 이후 팀원들끼리 어떤 동작에 권한 인증을 도입할지 의논
router.use('/', tokenRouter.vertifyToken);
router.use('/milestone', milestoneRouter);
router.use('/issue', issueRouter);
router.use('/comment', commentRouter);
router.use('/label', labelRouter);
router.use('/assigns', assignsRouter);
router.use('/upload', uploadRouter);

module.exports = router;
