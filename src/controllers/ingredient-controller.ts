import { type } from "os";
import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
} from "routing-controllers";
import { Ingredient } from "../entities/ingredient";
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
  async getAll(): Promise<Ingredient[]> {
    const [result, total] = await this.service.findAll();

    return result;
  }

  // @Post("/")
  // async create(@Body() ingredient: any): Promise<{ message: string }> {
  //   await this.service.create(ingredient);
  //   return { message: "Item created!" };
  // }
}
