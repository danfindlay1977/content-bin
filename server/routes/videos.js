// routes for video controller
const express = require("express");
const router = express.Router();
const {
  uploadVideo,
  getVideo,
  getVideos,
  updateVideo,
  searchVideo,
} = require("../controller/videos");
const { cpUpload } = require("../middleware/upload");

router.post("/upload", cpUpload, uploadVideo);
router.get("/videos", getVideos);
router.get("/video/:id", getVideo);
router.patch("/video/id", updateVideo);
router.get("/video/search", searchVideo);

module.exports = router;
