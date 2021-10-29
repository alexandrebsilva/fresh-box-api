import { CategoryIngredient } from "../entities/category-ingredient";
import { BaseService } from "./base-service";

export class CategoryIngredientService extends BaseService<CategoryIngredient> {
  constructor() {
    super(CategoryIngredient);
  }
}
