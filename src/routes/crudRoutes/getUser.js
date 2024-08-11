import express from "express";
import User from "../../models/User.js";

const getUser = express.Router();

getUser.get("/:id", (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User not found" });
      } else {
        res.status(200).send(user);
      }
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

export default getUser;