require("dotenv").config();
module.exports = {
  projectId: process.env.projectId,
  dbUser: process.env.dbUser,
  dbPassword: process.env.dbPassword,
  dbName: process.env.dbName,
};
