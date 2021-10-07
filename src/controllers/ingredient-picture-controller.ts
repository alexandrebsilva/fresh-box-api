import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  BadRequestError,
} from "routing-controllers";
import { IngredientPicture } from "../entities/ingredient-picture";
import { IngredientPictureService } from "../services/ingredient-picutre-service";

@JsonController("/ingredient-picture")
export class IngredientPictureController {
  constructor(
    private readonly ingredientPictureService = new IngredientPictureService()
  ) {}

  @Get("/all")
  async getAll(): Promise<IngredientPicture[]> {
    const ingredients = await this.ingredientPictureService.getAll();

    return ingredients;
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<IngredientPicture> {
    const ingredient = await this.ingredientPictureService.getById(id);
    if (ingredient === undefined) throw new BadRequestError("Item not found!");
    return ingredient;
  }

  @Post("/")
  async create(@Body() ingredientPicture: any): Promise<{ message: string }> {
    await this.ingredientPictureService.create(ingredientPicture);
    return { message: "Item created!" };
  }
}
