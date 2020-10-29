const db = require('../models/connection');
const { CREATE_LABEL, READ_LABEL, UPDATE_LABEL, DELETE_LABEL, READ_LABEL_IN_ISSUE, CREATE_LABEL_IN_ISSUE, DELETE_LABEL_IN_ISSUE, CHECK_DUPLICATE_LABEL_IN_ISSUE } = require('../models/query');

const createLabel = async (req, res) => {
    const { name, description, color } = req.body;
    await db(CREATE_LABEL, [name, description, color]);
    return res.status(200).json({ success: true });
};

const readLabel = async (req, res) => {
    const result = await db(READ_LABEL);
    return res.status(200).json({ success: true, result });
};

const updateLabel = async (req, res) => {
    const { labelid: labelID } = req.params;
    const { name, description, color } = req.body;
    await db(UPDATE_LABEL, [name, description, color, labelID]);
    return res.status(200).json({ success: true });
};

const deleteLabel = async (req, res) => {
    const { labelid: labelID } = req.params;
    await db(DELETE_LABEL, [labelID]);
    return res.status(200).json({ success: true });
};


const readLabelInIssue = async (req, res) => {
    const { issueid: issueID } = req.params;
    const result = await db(READ_LABEL_IN_ISSUE, [issueID]);
    return res.status(200).json({success: true, result});
};

const createLabelInIssue = async (req, res) => {
    const { issueid: issueID, labelid: labelID } = req.params;
    const existingLabel = await db(CHECK_DUPLICATE_LABEL_IN_ISSUE, [labelID, issueID]);
    if (existingLabel.length !== 0) {
        return res.status(409).json({success: false, message: "중복된 라벨입니다"});
    }

    await db(CREATE_LABEL_IN_ISSUE, [labelID, issueID]);
    return res.status(201).json({success: true});
};

const deleteLabelInIssue = async (req, res) => {
    const { issueid: issueID, labelid: labelID } = req.params;
    await db(DELETE_LABEL_IN_ISSUE, [labelID, issueID]);
    return res.status(200).json({success: true});
};

module.exports = { createLabel, readLabel, updateLabel, deleteLabel, readLabelInIssue, createLabelInIssue, deleteLabelInIssue };