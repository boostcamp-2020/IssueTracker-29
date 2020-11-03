const express = require('express');
const tokenMiddleWare = require('../middlewares/auth/token');
const userMiddleWare = require('../middlewares/user');
const passport = require('passport');

const router = express.Router();

router.get('/auth/github/callback', passport.authenticate('github', {
  failureRedirect: '/',
}), tokenMiddleWare.createToken);

router.get('/all', userMiddleWare.readAllUser);

module.exports = router;
