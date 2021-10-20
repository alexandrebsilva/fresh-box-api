import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
  QueryParam,
} from "routing-controllers";
import { Ingredient } from "../entities/ingredient";
import { PaginatedResponse } from "../models/paginated-response";
import { IngredientService } from "../services/ingredient-service";

@JsonController("/ingredient")
export class IngredientController {
  constructor(private readonly service = new IngredientService()) {}

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<Ingredient> {
    const result = await this.service.findById(id);
    if (result === undefined) throw new BadRequestError("Item not found!");
    return result;
  }

  @Get("/all")
  async getAll(
    @QueryParam("page") page: number
  ): Promise<PaginatedResponse<Ingredient>> {
    const result = await this.service.findAll(page);

    return result;
  }

  // @Post("/")
  // async create(@Body() ingredient: any): Promise<{ message: string }> {
  //   await this.service.create(ingredient);
  //   return { message: "Item created!" };
  // }
}