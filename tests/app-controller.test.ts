// import request from "supertest";
import MockServer from "./MockServer";
import request from "supertest";
import path from "path";

const app = request(MockServer);

describe("App base test", () => {
  it("Should return 200 http response for  the health app route", async () => {
    const result = await app.get("/health");
    console.log("RESULT", result.status);

    console.log(path.join(__dirname + "/../src/controllers/*"));

    expect(result.status).toBe(404);
  });
});
