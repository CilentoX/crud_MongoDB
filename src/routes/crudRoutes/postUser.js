import express from "express";
import User from "../../models/User.js";

const postUser = express.Router();

postUser.post("/", (req, res) => {
  const { name, email, age } = req.body;

  const user = new User({ name, email, age });

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send({ message: error.message });
    });
});

export default postUser;
