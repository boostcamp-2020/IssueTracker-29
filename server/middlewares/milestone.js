const db = require('../models/connection');
const { CREATE_MILESTONE, READ_MILESTONE, UPDATE_MILESTONE, DELETE_MILESTONE, READ_ISSUE_BY_MILESTONE, CREATE_ISSUE_BY_MILESTONE, UPDATE_MILESTONE_STATE, READ_ALL_MILESTONE } = require('../models/query');

const readMilestone = async (req, res) => {
    const { state: isOpen } = req.params;
    const result = await db(READ_MILESTONE, [isOpen]);

    return res.status(200).json({ success: true, result });
};

const createMilestone = async (req, res) => {
    const { title, dueDate, description } = req.body;
    const userID = req.user.id;
    await db(CREATE_MILESTONE, [title, dueDate, description, 1, userID]);

    return res.status(200).json({ success: true });
};

const updateMilestone = async (req, res) => {
    const { milestoneid: milestoneID } = req.params;
    const { title, dueDate, description } = req.body;
    await db(UPDATE_MILESTONE, [title, dueDate, description, milestoneID]);

    return res.status(200).json({ success: true });
};

const deleteMilestone = async (req, res) => {
    const { milestoneid: milestoneID } = req.params;
    await db(DELETE_MILESTONE, [milestoneID]);

    return res.status(200).json({ success: true });
};

const readIssueByMilestone = async (req, res) => {
    const { milestoneid: milestoneID } = req.params;
    const result = await db(READ_ISSUE_BY_MILESTONE, [milestoneID, milestoneID, milestoneID]);
    
    return res.status(200).json({ success: true, result });
};

const createIssueByMilestone = async (req, res) => {
    const { milestoneid: milestoneID } = req.params;
    const { title, contents } = req.body;
    const userID = req.user.id;

    await db(CREATE_ISSUE_BY_MILESTONE, [title, contents, 1, userID, milestoneID]);

    return res.status(200).json({ success: true });
};

const updateMilestoneState = async (req, res) => {
    const { isOpen } = req.body;
    const { milestoneid: milestoneID } = req.params;

    await db(UPDATE_MILESTONE_STATE, [isOpen, milestoneID]);

    return res.status(200).json({ success: true });    
};

const readAllMilestone = async (req, res) => {
  const result = await db(READ_ALL_MILESTONE);
  return res.json({ success: true, result });
};

module.exports = { readMilestone, createMilestone, updateMilestone, deleteMilestone, readIssueByMilestone, createIssueByMilestone, updateMilestoneState, readAllMilestone };