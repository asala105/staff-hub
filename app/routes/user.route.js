const express = require("express");
const router = express.Router();
const userService = require("../services/user.service");

router.get("/users/", async function (req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(201).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error"); // Handle any errors
  }
});

module.exports = router;
