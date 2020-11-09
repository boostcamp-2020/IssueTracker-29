const express = require('express');
const passport = require('passport');
const tokenMiddleWare = require('../middlewares/auth/token');
const userMiddleWare = require('../middlewares/user');

const router = express.Router();

router.get('/auth/github', passport.authenticate('github'));

router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
  }),
  tokenMiddleWare.createToken
);

router.get('/', userMiddleWare.readAllUser);

module.exports = router;
