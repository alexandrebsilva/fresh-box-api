import { Ingredient } from "../entities/ingredient";
import { BaseService } from "./base-service";

export class IngredientService extends BaseService<Ingredient> {
  constructor() {
    super(Ingredient);
  }
}
