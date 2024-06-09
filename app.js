const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = require("./app/config/db");

const app = express();

connectDB();
const port = process.env.PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
