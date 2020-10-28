const db = require('../models/connection');
const { CREATE_MILESTONE, READ_MILESTONE, UPDATE_MILESTONE, DELETE_MILESTONE, READ_ISSUE_BY_MILESTONE, CREATE_ISSUE_BY_MILESTONE, TOGGLE_MILESTONE_STATE } = require('../models/query');

const readMilestone = async (req, res) => {
    const { isOpen } = req.body;
    const result = await db(READ_MILESTONE, [isOpen]);

    return res.status(200).json({ success: true, result: result });
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
    const { milestoneid: milestoneID } = req.body;
    const result = await db(READ_ISSUE_BY_MILESTONE, [milestoneID, milestoneID, milestoneID]);
    
    return res.status(200).json({ success: true, result: result });
};

const createIssueByMilestone = async (req, res) => {
    const { milestoneid: milestoneID } = req.params;
    const { title, contents } = req.body;
    const userID = req.user.id;

    await db(CREATE_ISSUE_BY_MILESTONE, [title, contents, 1, userID, milestoneID]);

    return res.status(200).json({ success: true });
};

const toggleMilestoneState = async (req, res) => {
    const { isOpen } = req.body;
    const { milestoneid: milestoneID } = req.params;

    let revertedState;

    if(isOpen === 0){
        revertedState = 1;
    } else {
        revertedState = 0;
    }

    await db(TOGGLE_MILESTONE_STATE, [revertedState, milestoneID]);

    return res.status(200).json({ success: true });    
};

module.exports = { readMilestone, createMilestone, updateMilestone, deleteMilestone, readIssueByMilestone, createIssueByMilestone, toggleMilestoneState };