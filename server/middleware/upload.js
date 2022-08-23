const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    req.body.name = file.originalname;
    req.body.mimeType = file.mimetype;
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    console.log("in filter");
    if (!file) {
      cb(null, false);
    }
    cb(null, true);
  },
});

exports.cpUpload = upload.fields([{ name: "videos", maxCount: 5 }]);
