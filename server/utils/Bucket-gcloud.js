const { Storage } = require("@google-cloud/storage");
const { GoogleAuth } = require("google-auth-library");
const path = require("path");
const fsExtra = require("fs-extra");
const axios = require("axios");
const { projectId } = require("../../config.js");
const keys = require("../key.json");

class Bucket {
  constructor() {
    this.storage = new Storage({
      keyFilename: path.join(__dirname, "../key.json"),
      projectId,
    });
    this.storage.getBuckets().then(([data]) => {
      // check that bucket is up and running
      if (data.length == 0) {
        // create new bucket
        this.storage.createBucket("contentbin-videos");
      }
    });
    this.bucket = this.storage.bucket("contentbin-videos");
  }

  async upload(name) {
    try {
      const file = await this.bucket.upload(`${__dirname}/../uploads/${name}`);
      if (file) {
        this.clearUploads();
      }
    } catch (e) {
      throw new Error(e);
    }
  }
  async remove(name) {
    try {
      const delRecord = await this.bucket.file(name).delete();
      console.log("deleted record");
    } catch (e) {
      throw new Error(e);
    }
  }
  async update(oldRecord, newRecord) {
    console.log(oldRecord);
    console.log(newRecord);
    try {
      const delRecord = await this.bucket.file(oldRecord).delete();
      if (delRecord) {
        const file = await this.bucket.upload(
          `${__dirname}/../uploads/${newRecord}`
        );
        if (file) {
          this.clearUploads();
        }
      }
    } catch (e) {
      throw new Error(e);
    }
  }
  clearUploads() {
    fsExtra.emptyDirSync(`${__dirname}/../uploads`);
  }
}

module.exports = Bucket;
