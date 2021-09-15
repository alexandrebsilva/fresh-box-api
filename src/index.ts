// this shim is required
import "reflect-metadata";
import path from "path";

import { createExpressServer } from "routing-controllers";
import { App } from "./app";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [path.join(__dirname + "/controllers/*")], // we specify controllers we want to use
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Api running on port ${port}`);
  App.startedServerAt = new Date();
});
