import { Recipe } from "../entities/recipe";
import { BaseService } from "./base-service";

export class RecipeService extends BaseService<Recipe> {
  constructor() {
    super(Recipe);
  }
}
