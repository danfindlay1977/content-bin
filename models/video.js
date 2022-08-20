"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init(
    {
      video_name: DataTypes.STRING,
      video_publishDate: DataTypes.DATE,
      video_filetype: DataTypes.STRING,
      video_length: DataTypes.FLOAT,
      video_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Video",
    }
  );
  return Video;
};
