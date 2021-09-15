import { JsonController, Get } from "routing-controllers";
import { App } from "../app";

@JsonController()
export class UserController {
  @Get("/health")
  getAll() {
    return {
      success: true,
      message: "Api ok!",
      startedServerAt: App.startedServerAt,
    };
  }
}
