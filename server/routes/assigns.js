const express = require('express');
const assignsMiddleware = require('../middlewares/assigns');

const router = express.Router();

router.delete('/:assignsid', assignsMiddleware.deleteAssigns);

module.exports = router;
