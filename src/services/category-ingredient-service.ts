import { getRepository } from "typeorm";
import { CategoryIngredient } from "../entities/category-ingredient";
import { CategoryIngredientCreateRequest } from "../models/validatiors/create/category-ingredient-request";
import { BaseService } from "./base-service";

export class CategoryIngredientService extends BaseService<CategoryIngredient> {
  constructor() {
    super(CategoryIngredient);
  }

  async create(payload: CategoryIngredientCreateRequest): Promise<void> {
    const newRow = {
      ...new CategoryIngredient(),
      ...payload,
    };

    await getRepository(CategoryIngredient).save(newRow);
  }
}
