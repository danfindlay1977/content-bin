"use strict";
const { Model } = require("sequelize");
const Bucket = require("../server/utils/Bucket-gcloud");
const bucket = new Bucket();
const fs = require("fs");
const path = require("path");
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
          console.log(dataValues);
          await bucket.upload(dataValues.video_name);
        },

        beforeDestroy: async ({ dataValues }, options) => {
          await bucket.remove(dataValues.video_name);
        },
        beforeUpdate: async ({ dataValues }, options) => {
          const oldRecord = await Video.findOne({
            where: {
              id: dataValues.id,
            },
          });
          console.log(oldRecord);
          const dir = path.join(__dirname, "/../server/uploads");
          const file = fs.readdirSync(dir);
          console.log(dataValues);

          if (file.length == 1) {
            console.log("in here");
            await bucket.update(oldRecord.video_name, dataValues.video_name);
          }
        },
      },

      sequelize,
      modelName: "Video",
    }
  );

  return Video;
};
