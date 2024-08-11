import express from "express";
import User from "../../models/User.js";

const getUser = express.Router();

getUser.get("/", (req, res) => {
  User.find({})
    .then((users) => {
      res
        .status(200)
        .send(!users.length ? { message: "No users found" } : users);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

export default getUser;
