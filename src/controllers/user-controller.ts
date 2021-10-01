import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import { getConnection, getManager } from "typeorm";
import { User } from "../entities/user";

@JsonController("/user")
export class UserController {
  @Get("/all")
  async getAll() {
    const [users, count] = await getManager().findAndCount(User);

    return { users, count };
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
