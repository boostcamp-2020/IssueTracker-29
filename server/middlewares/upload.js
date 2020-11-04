const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname);
    }
});

const upload = multer({ storage: storage }).single("file");

const ImageUpload = (req, res) => {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(403).json({ success: false });
        } else if (err) {
            return res.status(403).json({ success: false });
        }
        return res.status(200).json({ success: true, url:`/uploads/${req.file.filename}` });
    });
}

module.exports = { ImageUpload };