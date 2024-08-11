import express from "express";
import User from "../../models/User.js";

const deleteUser = express.Router();

deleteUser.delete("/:id", (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User not found" });
      } else {
        res.status(200).send({ message: "User deleted" });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

export default deleteUser;