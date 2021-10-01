// this shim is required
import "reflect-metadata";
import path from "path";

import { createExpressServer } from "routing-controllers";
import { App } from "./app";
import { Connection, createConnection } from "typeorm";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
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
