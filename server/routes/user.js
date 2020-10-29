const express = require('express');
const userMiddleWare = require('../middlewares/user');
const passport = require('passport');

const router = express.Router();

router.get('/auth/github/callback', passport.authenticate('github', {
  failureRedirect: '/',
}), userMiddleWare.createToken);

module.exports = router;
