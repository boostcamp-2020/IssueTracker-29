const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/upload');
const multer = require('multer');

// multer setting
const upload = multer({
    storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
        cb(null, 'uploads');
      },
      // convert a file name
      filename: (req, file, cb) => {
        cb(null, new Date().valueOf());
      },
    }),
});

router.post('/', upload.single('file'), (req, res, next) => {
    console.log("ss");
});

module.exports = router;
