const db = require('../models/connection');
const { READ_ALL_USER, READ_USER_BY_ID } = require('../models/query');

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

const readUserById = async (req, res) => {
  const { userid: userID } = req.params;
  const result = await db(READ_USER_BY_ID, [userID]);

  if (result.length === 0) {
    return res.status(404).json({ success: false, message: '없는 이슈입니다' });
  }
  
  res.status(200).json({success: true, result: result[0]});
}

module.exports = { readAllUser, readIsLogIn, readUserById };
