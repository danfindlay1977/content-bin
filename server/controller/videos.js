/* provides basic Crud Operations for videos uploading ,deleting , updating and querying */
const { Video } = require("../../models");

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

    res.status(201).send({ video });
  } catch (e) {
    console.log(e);
  }
};
exports.deleteVideo = async (req, res, next) => {
  try {
    const deleteRecord = await Video.destroy({
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    res.json({ deleteRecord });
  } catch (e) {
    console.log(e);
  }
};
exports.getVideos = (req, res, next) => {};
exports.getVideo = (req, res, next) => {};
exports.updateVideo = async (req, res, next) => {
  const {
    video_mimeType,
    video_name,
    video_description,
    video_filetype,
    video_length,
  } = req.body;
  console.log(req.body);
  try {
    const updatedVideo = await Video.findOne({
      where: { id: req.params.id },
    });

    updatedVideo.video_name = video_name;
    updatedVideo.video_description = video_description;
    updatedVideo.video_filetype = video_filetype;
    updatedVideo.video_length = video_length;
    const video = await updatedVideo.save();
    res.status(201).send({ video });
  } catch (e) {
    console.log(e);
  }
};
