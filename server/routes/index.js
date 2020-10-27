const userRouter = require('./user');
const milestoneRouter = require('./milestone');
const issueRouter = require('./issue');
const commentRouter = require('./comment');

app.use('/user', userRouter);
app.use('/milestone', milestoneRouter);
app.use('/issue', issueRouter);
app.use('/comment', commentRouter);