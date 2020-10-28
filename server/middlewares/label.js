const db = require('../models/connection');
const { CREATE_LABEL, READ_LABEL, UPDATE_LABEL, DELETE_LABEL } = require('../models/query');

const createLabel = async (req, res) => {
    const { name, description, color } = req.body;
    await db(CREATE_LABEL, [name, description, color]);
    return res.status(200).json({ success: true });
};

const readLabel = async (req, res) => {
    const result = await db(READ_LABEL);
    return res.status(200).json({ success: true, result });
}

const updateLabel = async (req, res) => {
    const { labelid: labelID } = req.params;
    const { name, description, color } = req.body;
    await db(UPDATE_LABEL, [name, description, color, labelID]);
    return res.status(200).json({ success: true });
}

const deleteLabel = async (req, res) => {
    const { labelid: labelID } = req.params;
    await db(DELETE_LABEL, [labelID]);
    return res.status(200).json({ success: true });
}

module.exports = { createLabel, readLabel, updateLabel, deleteLabel };