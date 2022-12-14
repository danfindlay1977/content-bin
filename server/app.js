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
const { dbUser, dbPassword, dbName } = require("../config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@localhost:5432/${dbName}`
);
// const gc = new Storage({
//   keyFilename: path.join(__dirname, "./key.json"),
//   projectId: "banded-arch-358717",
// });
// gc.getBuckets()
//   .then((x) => console.log(x))
//   .catch((e) => console.log(e));
// // middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

// routes
app.use("/api/v1", videoRouter);

// error handling middlware
app.use((error, req, res, next) => {
  console.log("in global error handling");
  console.log(error);
  const statusCode = error.status;
  const errorMsg = error.msg;
  console.log(statusCode);
  console.log(errorMsg);
  res.status(statusCode).send({ errorMsg });
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
  sequelize.sync();
});
