const express = require('express');
const userMiddleWare = require('../middlewares/user');

const router = express.Router();

router.post('/signup', userMiddleWare.signup);

router.post('/login', userMiddleWare.login);

router.post('/logout', userMiddleWare.logout);

module.exports = router;
