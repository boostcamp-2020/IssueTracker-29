const db = require('../models/connection');
const { READ_ALL_USER } = require('../models/query');

const readAllUser = async (req, res) => {
  const result = await db(READ_ALL_USER);
  return res.status(200).json({ result });
};

module.exports = { readAllUser };
