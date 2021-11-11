import { getRepository } from "typeorm";
import { AlergyService, TagService } from ".";
import { Recipe } from "../entities/recipe";
import { RecipeAux } from "../entities/recipe-aux";
import { RecipeCreateRequest } from "../models/validatiors/create/recipe-request";
import { BaseService } from "./base-service";

export class RecipeService extends BaseService<Recipe> {
  constructor() {
    super(Recipe);
  }

  async findAllFull(): Promise<Recipe[]> {
    const result = await getRepository(Recipe).find({
      relations: ["tags", "alergies", "steps"],
    });
    return result;
  }

  async createFull(payload: RecipeCreateRequest): Promise<void> {
    const alergies = await new AlergyService().findByIds(
      payload.alergies ?? []
    );

    const tags = await new TagService().findByIds(payload.tags ?? []);

    const recipeAuxs = payload.ingredients.map((item) => {
      return {
        ...new RecipeAux(),
        ingredient: item.ingredient,
        unitOfMeasurement: item.unitOfMeasurement,
        amount: item.amount,
        isIncluded: item.isIncluded,
      };
    });

    const recipe = {
      ...payload,
      tags,
      alergies,
      recipeAuxs,
    } as unknown as Recipe;
    await this.create(recipe);
  }
}
