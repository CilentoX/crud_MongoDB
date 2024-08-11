import express from "express";

import User from "../../models/User.js";

const putUser = express.Router();

putUser.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  User.findByIdAndUpdate(id, { name, email, age }, { new: true })
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

export default putUser;
