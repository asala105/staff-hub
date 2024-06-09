const mongoose = require("mongoose");

const url = "mongodb://mongo:27017/docker-node-mongo";

const connectDb = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.error(err));
};

module.exports = connectDb;
