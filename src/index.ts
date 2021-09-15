// this shim is required
import "reflect-metadata";
import path from "path";

import { createExpressServer } from "routing-controllers";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [path.join(__dirname + "/controllers/*")], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(process.env.PORT ?? 3000, () => {
  console.log("Api running on port 3000");
});
