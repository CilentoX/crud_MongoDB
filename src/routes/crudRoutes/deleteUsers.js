import express from "express";
import User from "../../models/User.js";

const deleteUsers = express.Router();

deleteUsers.delete("/", (req, res) => {
  User.deleteMany({})
    .then((users) => {
      res.status(200);
      if (!users.deletedCount) {
        res.send({ message: "No users found" });
      } else {
        res.send({ message: "All users deleted" });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

export default deleteUsers;