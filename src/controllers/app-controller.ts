import { JsonController, Get } from "routing-controllers";
import { App } from "../app";

@JsonController()
export class AppController {
  @Get("/health")
  getAll() {
    return {
      success: true,
      message: "Api ok!",
      serverStartedAt: App.serverStartedAt,
      dbConnectionStartedAt: App.dbConnectionStartedAt,
    };
  }
}
