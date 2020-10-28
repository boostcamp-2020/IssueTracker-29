const db = require('../models/connection');
const { CREATE_MILESTONE, READ_MILESTONE, UPDATE_MILESTONE, DELETE_MILESTONE } = require('../models/query');

const readMilestone = async (req, res) => {
    const { isOpen } = req.body;
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

module.exports = { readMilestone, createMilestone, updateMilestone, deleteMilestone };