const multer = require('multer');
const moment = require('moment');

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'uploads/');  // 파일이 저장되는 경로
        },
        filename: function(req, file, cb) {
            cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname);
        },
    }),
});

const ImageUpload = (req, res, next) => {
    console.log(req.file);
};

module.exports = { upload , ImageUpload };