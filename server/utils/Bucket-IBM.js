const ibm = require("ibm-cos-sdk");
const fs = require("fs");
require("dotenv").config();
console.log(process.env.apiKey);

class Bucket {
  constructor() {
    const config = {
      endpoint: process.env.endpoints,
      apiKeyId: "w7phhjKnZ2pAr-uAjSuHqCG4ZPbWDKIo5QnJ3vVJU7jP",
      serviceInstanceId: process.env.resource_instance_id,
      signatureVersion: "iam",
    };
    this.bucketName = "contentbin";
    this.cos = new ibm.S3(config);
  }

  createObject(fileName) {
    const stream = fs.createReadStream(
      `${__dirname}/../middleware/uploads/${fileName}`
    );
    console.log(this.bucketName);
    try {
      this.cos
        .putObject({
          Bucket: this.bucketName,
          Key: fileName,
          Body: stream,
        })
        .promise();
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = Bucket;
