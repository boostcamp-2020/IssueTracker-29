const db = require('../models/connection');
const { READ_ALL_USER } = require('../models/query');

const readAllUser = async (req, res) => {
  const result = await db(READ_ALL_USER);
  return res.status(200).json({ result });
};

const readIsLogIn = async (req, res, next) => {
  if (req.user) {
    const {id, username, profile} = req.user;
    return res.status(200).json({success: true, result: {id, username, profile}});
  }

  return res.status(401).json({success: false});
};

module.exports = { readAllUser, readIsLogIn };
