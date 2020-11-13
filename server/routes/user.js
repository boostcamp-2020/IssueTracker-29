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
  tokenMiddleWare.createToken,
  (req, res) => {
    res.redirect('/issue');
  }
);

router.get('/', userMiddleWare.readAllUser);

router.get('/me', userMiddleWare.readIsLogIn);

router.get('/:userid', userMiddleWare.readUserById);

module.exports = router;
