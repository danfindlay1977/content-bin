const express = require("express");
const app = express();
const videoRouter = require("./routes/videos");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const { cpUpload } = require("./middleware/upload");
const port = process.env.PORT || 8080;
const { Storage } = require("@google-cloud/storage");
const path = require("path");
// const gc = new Storage({
//   keyFilename: path.join(__dirname, "./key.json"),
//   projectId: "banded-arch-358717",
// });
// gc.getBuckets()
//   .then((x) => console.log(x))
//   .catch((e) => console.log(e));
// // middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

// routes
app.use("/api/v1", videoRouter);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
