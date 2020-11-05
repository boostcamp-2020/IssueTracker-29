const db = require('../models/connection');
const { CREATE_COMMENT, READ_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } = require('../models/query');

const createComment = async (req, res) => {
  const { contents } = req.body;
  const { issueid: issueID } = req.params;
  const userID = req.user.id;
  
  if (!issueID) {
    return res.status(403).json({ success: false, message: '없는 이슈입니다.' });
  }
  await db(CREATE_COMMENT, [contents, issueID, userID, new Date()]);
  return res.status(200).json({ success: true });
};

const readCommentsByIssueID = async (req, res) => {
  const { issueid: issueID } = req.params;
  const result = await db(READ_COMMENT, [issueID]);

  return res.status(200).json({ success: true, result });
};

const updateComment = async (req, res) => {
  const { contents, issueID } = req.body;
  const { commentid: commentID } = req.params;
  if (!issueID) {
    return res.status(403).json({ success: false, message: '없는 이슈입니다.' });
  }
  await db(UPDATE_COMMENT, [contents, commentID]);
  return res.status(200).json({ success: true });
};

const deleteComment = async (req, res) => {
  const { issueID } = req.body;
  const { coomentid: commentID } = req.params;
  if (!issueID) {
    return res.status(403).json({ success: false, message: '없는 이슈입니다.' });
  }
  await db(DELETE_COMMENT, [commentID]);
  return res.status(200).json({ success: true });
};

module.exports = { createComment, readCommentsByIssueID, updateComment, deleteComment };
