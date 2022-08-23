const { Storage } = require("@google-cloud/storage");
const path = require("path");
const fsExtra = require("fs-extra");
const req = require("express/lib/request");
class Bucket {
  constructor() {
    console.log("in constructer");
    this.storage = new Storage({
      keyFilename: path.join(__dirname, "../key.json"),
      projectId: "banded-arch-358717",
    });

    this.storage.getBuckets().then(([data]) => {
      // check that bucket is up and running
      if (data.length == 0) {
        console.log("IN CHECK =======+++++++");
        // create new bucket
        this.storage.createBucket("contentbin-videos");
      }
    });
    this.bucket = this.storage.bucket("contentbin-videos");
    //console.log(`name of current bucket is ${this.bucket.id}`);
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
  async update(filenames, name) {
    try {
    } catch (e) {
      throw new Error(e);
    }
  }
  clearUploads() {
    fsExtra.emptyDirSync(`${__dirname}/../uploads`);
  }
}

module.exports = Bucket;
