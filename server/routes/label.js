const express = require('express');
const labelMiddleware = require('../middlewares/label');

const router = express.Router();

router.get('/', labelMiddleware.readLabel);

router.post('/', labelMiddleware.createLabel);

router.put('/:labelid', labelMiddleware.updateLabel);

router.delete('/:labelid', labelMiddleware.deleteLabel);

module.exports = router;