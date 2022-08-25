const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    req.body.video_name = file.originalname;
    req.body.video_filetype = file.mimetype;
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (!file) {
      cb(null, false);
    }
    cb(null, true);
  },
});

exports.cpUpload = upload.fields([{ name: "videos", maxCount: 5 }]);
