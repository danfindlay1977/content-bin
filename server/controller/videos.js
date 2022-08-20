/* provides basic Crud Operations for videos uploading ,deleting , updating and querying */
const { Video } = require("../../models");
const Bucket = require("../utils/Bucket-gcloud");
const bucket = new Bucket();

exports.uploadVideo = async (req, res, next) => {
  const { name, mimeType } = req.body;
  try {
    const video = await Video.create({
      video_name: name,
      video_publishDate: "10/12/22",
      video_filetype: mimeType,
      video_length: 25.5,
      video_description: "This is a description",
    });
    if (!video) {
      throw new Error("video data could not be added to the database");
    }
    const data = await bucket.upload(name);

    res.status(201).send({ data });
  } catch (e) {
    console.log(e);
  }
};
exports.deleteVideo = (req, res, next) => {};
exports.getVideos = (req, res, next) => {};
exports.getVideo = (req, res, next) => {};
exports.updateVideo = (req, res, next) => {};
exports.searchVideo = (req, res, next) => {};
