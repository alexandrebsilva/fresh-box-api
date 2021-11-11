// this shim is required
import "reflect-metadata";
import path from "path";

import { createExpressServer } from "routing-controllers";

import { Connection, createConnection } from "typeorm";

export class MockServer {
  constructor() {
    this.start();
  }
  public app: any;

  private connection: any;

  async createConnection(): Promise<Connection> {
    return await createConnection({
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
  }

  public async start(): Promise<any> {
    if (this.connection) {
      this.connection = await this.createConnection();
    }
    this.app = createExpressServer({
      validation: true,
      // authorizationChecker: async (action: Action, roles: string[]) => {
      //   // here you can use request/response objects from action
      //   // also if decorator defines roles it needs to access the action
      //   // you can use them to provide granular access check
      //   // checker must return either boolean (true or false)
      //   // either promise that resolves a boolean value
      //   // demo code:
      //   const token = action.request.headers["authorization"];

      //   const user = await getEntityManager().findOneByToken(User, token);
      //   if (user && !roles.length) return true;
      //   if (user && roles.find((role) => user.roles.indexOf(role) !== -1))
      //     return true;

      //   return false;
      // },
      controllers: [path.join(__dirname + "/controllers/*")],
    });
  }
}
// creates express app, registers all controller routes and returns you express app instance
