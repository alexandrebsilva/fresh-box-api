import { AlergyService, TagService } from ".";
import { Recipe } from "../entities/recipe";
import { RecipeCreateRequest } from "../models/validatiors/create/recipe-request";
import { BaseService } from "./base-service";

export class RecipeService extends BaseService<Recipe> {
  constructor() {
    super(Recipe);
  }
  // async findById(id: number): Promise<Recipe> {
  //   const result = await getRepository(Recipe).find({
  //     where: { id },
  //     relations: ["difficultyLevel", "tags", "alergies", "pictures"],
  //   });
  //   return result[0];
  // }

  async createFull(payload: RecipeCreateRequest): Promise<void> {
    const alergies = await new AlergyService().findByIds(
      payload.alergies ?? []
    );

    const tags = await new TagService().findByIds(payload.tags ?? []);

    const recipe = { ...payload, tags, alergies } as unknown as Recipe;
    await this.create(recipe);
  }
}
