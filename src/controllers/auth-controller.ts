import { JsonController, Param, Body, Get, Post } from "routing-controllers";
import { Credentials } from "../models/auth/credentials";
import { AuthService } from "../services/auth-service";

@JsonController("/auth")
export class AuthController {
  constructor(private readonly authService = new AuthService()) {}

  @Get("/users/:id")
  async getOne(@Param("id") id: number) {
    return { id };
  }

  @Post("/login")
  async login(@Body() credentials: Credentials) {
    const token = await this.authService.login(credentials);

    return { token, credentials };
  }

  // @Post("/register")
  // async register(@Body() registerPayload: any) {
  //   const token = await this.authService.login(registerPayload);

  //   return { token };
  // }
}
