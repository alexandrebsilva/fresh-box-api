// this shim is required
import "reflect-metadata";
import path from "path";
import { createExpressServer } from "routing-controllers";

const app = createExpressServer({
  controllers: [path.join(__dirname + "../src/controllers/*")],
});

export default app;
