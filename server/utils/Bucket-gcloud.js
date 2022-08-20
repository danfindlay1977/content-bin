const { Storage } = require("@google-cloud/storage");
const path = require("path");
class Bucket {
  constructor() {
    this.storage = new Storage({
      keyFilename: path.join(__dirname, "../key.json"),
      projectId: "banded-arch-358717",
    });
    this.bucket = this.storage.bucket("contentbin-video");
  }
  async upload(name) {
    const file = await this.bucket.upload(`${__dirname}/../uploads/${name}`);
    console.log(file);
  }
}
module.exports = Bucket;
