import pingRoute from "./utils/pingRoute.js";
import getUsers from "./crudRoutes/getUsers.js";
import getUser from "./crudRoutes/getUser.js";
import postUser from "./crudRoutes/postUser.js";
import deleteUsers from "./crudRoutes/deleteUsers.js";
import deleteUser from "./crudRoutes/deleteUser.js";

import putUser from "./crudRoutes/putUser.js";

const BasePath = "/api/v1";

export default function routes(server) {
  server.use(`${BasePath}/ping`, pingRoute);
  server.use(`${BasePath}/users`, getUsers);
  server.use(`${BasePath}/user`, getUser);
  server.use(`${BasePath}/users`, postUser);
  server.use(`${BasePath}/users`, deleteUsers);
  server.use(`${BasePath}/user`, deleteUser);
  server.use(`${BasePath}/user`, putUser);
}
