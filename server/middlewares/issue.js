const db = require('../models/connection');
const { CREATE_ISSUE, READ_ISSUE_BY_ID, UPDATE_ISSUE_STATE, UPDATE_ISSUE, DELETE_ISSUE, READ_ALL_ISSUE } = require('../models/query');

const OPEN = 1;
const CLOSE = 0;

const readAllIssues = async (req, res) => {
  const result = await db(READ_ALL_ISSUE);

  return res.status(200).json({ success: true, result });
};

const createIssue = async (req, res) => {
  const { title, milestoneID } = req.body;
  const result = await db(CREATE_ISSUE, [title, OPEN, req.user.id, milestoneID, new Date()]);

  return res.status(201).json({ success: true, result: result.insertId });
};

const updateIssueState = async (req, res) => {
  const { isOpen, ids } = req.body;
  console.log(req.body);
  const result = await db(UPDATE_ISSUE_STATE, [isOpen, ids]);

  return res.json({success: true, result: result});
}

const readIssueByID = async (req ,res) => {
  const { issueid: issueID } = req.params;
  const result = await db(READ_ISSUE_BY_ID, [issueID]);
  
  if (result.length === 0) {
    return res.status(404).json({ success: false, message: '없는 이슈입니다' });
  }
  
  res.status(200).json({success: true, result: result[0]});
};

const updateIssue = async (req, res) => {
  const { title } = req.body;
  const { issueid: issueID } = req.params;
  
  const selectedIssue = await db(READ_ISSUE_BY_ID, [issueID]);
  
  if (!selectedIssue) {
    return res.status(404).json({ success: false, message: '없는 이슈입니다' });
  }

  if (selectedIssue[0].user_id !== req.user.id) {
    return res.status(401).json({ success: false, message: '허용되지 않은 작업입니다' });
  }
  
  await db(UPDATE_ISSUE, [title, issueID]);
  return res.status(200).json({ success: true });
};

const deleteIssue = async (req, res) => {
  const { issueid: issueID } = req.params;
  const selectedIssue = await db(READ_ISSUE_BY_ID, [issueID]);

  if (!selectedIssue) {
    return res.status(404).json({ success: false, message: '없는 이슈입니다' });
  }
  
  if (selectedIssue[0].user_id !== req.user.id) {
    return res.status(401).json({ success: false, message: '허용되지 않은 작업입니다' });
  }

  await db(DELETE_ISSUE, [issueID]);

  return res.status(200).json({success: true});
};

module.exports = { readAllIssues, createIssue, updateIssueState, readIssueByID, updateIssue, deleteIssue };