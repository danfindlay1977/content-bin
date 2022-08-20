const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    req.body.name = file.originalname;
    req.body.mimeType = file.mimetype;
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

exports.cpUpload = upload.fields([{ name: "videos", maxCount: 5 }]);
