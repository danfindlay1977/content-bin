"use strict";
const { Model } = require("sequelize");
const Bucket = require("../server/utils/Bucket-gcloud");
const bucket = new Bucket();

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
      hooks: {
        beforeCreate: async ({ dataValues }, options) => {
          // check to see if the name is already in db
          console.log("in create");
          await bucket.upload(dataValues.video_name);
        },

        beforeDestroy: async ({ dataValues }, options) => {
          await bucket.remove(dataValues.video_name);
        },
        beforeUpdate: async ({ dataValues }, options) => {
          //await bucket.update();
        },
      },

      sequelize,
      modelName: "Video",
    }
  );

  return Video;
};
