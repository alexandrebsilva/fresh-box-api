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
  constructor(private readonly ingredientService = new IngredientService()) {}

  @Get("/all")
  async getAll(): Promise<Ingredient[]> {
    const ingredients = await this.ingredientService.getAll();

    return ingredients;
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientService.getById(id);
    if (ingredient === undefined) throw new BadRequestError("Item not found!");
    return ingredient;
  }

  @Post("/")
  async create(@Body() ingredient: any): Promise<{ message: string }> {
    await this.ingredientService.create(ingredient);
    return { message: "Item created!" };
  }
}
