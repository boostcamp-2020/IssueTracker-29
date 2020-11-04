const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/upload');

router.post('/', uploadMiddleware.ImageUpload);

module.exports = router;
