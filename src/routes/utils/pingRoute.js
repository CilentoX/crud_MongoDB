import express from "express";

const pingRoute = express.Router();

pingRoute.get("/", (req, res) => {
  res.status(200).send({ message: "pong" });
});

export default pingRoute;
