// this shim is required
import "reflect-metadata";
import path from "path";

import { Action, createExpressServer } from "routing-controllers";
import { App } from "./app";
import { createConnection, getCustomRepository } from "typeorm";
import { UserRepository } from "./repository/user-repository";
import { AuthService } from "./services";

// creates express app, registers all controller routes and returns you express app instance
export const app = createExpressServer({
  validation: true,
  // currentUserChecker: async (action: Action, roles: string[]) => {
  //   // here you can use request/response objects from action
  //   // you need to provide a user object that will be injected in controller actions
  //   // demo code:
  //   const token = action.request.headers["authorization"];
  //   if (token) {
  //     return new AuthService().validateAndDecodeToken(token);
  //   }
  //   return false;
  // },
  controllers: [path.join(__dirname + "/controllers/*")],
});

const port = process.env.PORT ?? 3000;

app.listen(port, async () => {
  await createConnection({
    type: "postgres",
    host: process.env.DB_HOST ?? "localhost",
    port: 5432,
    username: process.env.DB_USERNAME ?? "postgres",
    password: process.env.DB_PASSWORD ?? "postgres",
    database: process.env.DB_DATABASE ?? "fresh-box",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
  });
  App.dbConnectionStartedAt = new Date();
  App.serverStartedAt = new Date();
  console.log(`Api running on port ${port}`);
});
