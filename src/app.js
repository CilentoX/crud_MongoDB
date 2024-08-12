import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import connectDB from "./database/mongoose.js";
const server = express();
configDotenv();

server.use(cors());
server.use(express.json());

import routes from "./routes/routes.js";
routes(server);

server.listen(process.env.PORT, () => {
  connectDB().then(() => {
    console.clear();
    console.log("\n\n 🍃| Connected to MongoDB\n\n");
    console.group(`Available routes:`);
    console.log(` 🟢 | GET http://localhost:${process.env.PORT}/api/v1/ping`);
    console.log(` 🟢 | GET http://localhost:${process.env.PORT}/api/v1/users`);
    console.log(` 🟢 | GET http://localhost:${process.env.PORT}/api/v1/user/:id`);
    console.log(` 🟠 | POST http://localhost:${process.env.PORT}/api/v1/users`);
    console.log(
      ` 🔴 | DELETE http://localhost:${process.env.PORT}/api/v1/users`
    );
    console.log(
      ` 🔴 | DELETE http://localhost:${process.env.PORT}/api/v1/user/:id`
    );
    console.log(` 🔵 | PUT http://localhost:${process.env.PORT}/api/v1/user/:id`);
    console.groupEnd();
  });
});
