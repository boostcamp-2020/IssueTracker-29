const jwt = require('jsonwebtoken');
const config = require('../config')[process.env.NODE_ENV || 'development'];
const db = require('../models/connection');
const { READ_USER } = require('../models/query');

const createToken = (req, res) => {
  if(!req.user) return res.status(404).json({ success: false, message: '유저가 없습니다.' });

  const payload = { id: req.user.id, username: req.user.username };
  const expiresIn = { expiresIn: '1 days'};
  const token = jwt.sign(payload, config.secretKey, expiresIn);

  res.cookie('user', token, { httpOnly: true });
  return res.status(200).json({ success: true });
};

const vertifyToken = async (req, res) => {
  const token = req.cookies.user;
  const decoded = jwt.verify(token, config.secretKey);

  if(!decoded) return res.status(404).json({ success: false, message: '잘못된 접근입니다.' });

  const user = await db(READ_USER, decoded.id);

  if(!user) return res.status(404).json({ success: false, message: '잘못된 접근입니다.' });

  return res.status(200).json({ success: true });
};

module.exports = { createToken, vertifyToken };