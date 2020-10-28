const db = require('../models/connection');
const { CREATE_ISSUE, READ_ISSUE_BY_ID, UPDATE_ISSUE, DELETE_ISSUE, READ_ALL_ISSUE, TOGGLE_ISSUE_STATE } = require('../models/query');

const OPEN = 1;

const readAllIssues = async (req, res) => {
  const result = await db(READ_ALL_ISSUE);

  return res.status(200).json({ success: true, result });
};

const createIssue = async (req, res) => {
  const { title, contents, milestoneID } = req.body;
  const result = await db(CREATE_ISSUE, [title, contents, OPEN, req.user.id, milestoneID]);

  return res.status(201).json({ success: true, result: result.insertId });
};

const readIssueByID = async (req ,res) => {
  const { issueid: issueID } = req.params;
  const result = await db(READ_ISSUE_BY_ID, [issueID]);
  
  if (result.length === 0) {
    return res.status(404).json({ success: false, message: '없는 이슈입니다' });
  }
  
  res.status(200).json({success: true, result: result[0]});
};

const updateIssue = async (req, res) => {
  const { title, contents, isOpen } = req.body;
  const { issueid: issueID } = req.params;
  
  const selectedIssue = await db(READ_ISSUE_BY_ID, [issueID]);
  
  if (!selectedIssue) {
    return res.status(404).json({ success: false, message: '없는 이슈입니다' });
  }

  if (selectedIssue[0].user_id !== req.user.id) {
    return res.status(401).json({ success: false, message: '허용되지 않은 작업입니다' });
  }
  
  await db(UPDATE_ISSUE, [title, contents, isOpen, issueID]);
  return res.status(200).json({ success: true });
};

const deleteIssue = async (req, res) => {
  const { issueid: issueID } = req.params;
    console.log(issueID);
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

const toggleIssueState = async (req, res) => {
  const { isOpen } = req.body;

  let revertedState;

  if (isOpen === 0) {
      revertedState = 1;
  }
  else {
      revertedState = 0;
  }

  await db(TOGGLE_ISSUE_STATE, [revertedState]);

  return res.status(200).json({success: true});
}

module.exports = { readAllIssues, createIssue, readIssueByID, updateIssue, deleteIssue, toggleIssueState };