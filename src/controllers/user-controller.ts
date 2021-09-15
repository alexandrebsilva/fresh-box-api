import { JsonController, Param, Body, Get, Post } from "routing-controllers";

@JsonController()
export class UserController {
  @Get("/users")
  getAll() {
    return [];
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return { id };
  }

  @Post("/users")
  post(@Body() user: any) {
    return { message: "user created!", user };
  }
}
