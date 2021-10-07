/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getRepository } from "typeorm";
import { IngredientPicture } from "../entities/ingredient-picture";

export class IngredientPictureRepository {
  async findById(id: number): Promise<IngredientPicture | undefined> {
    const result = await getRepository(IngredientPicture).findOne(id);
    return result;
  }

  async findAll(): Promise<IngredientPicture[]> {
    const result = await getRepository(IngredientPicture).find();
    return result;
  }

  async create(ingredientPicture: IngredientPicture): Promise<void> {
    await getRepository(IngredientPicture).create(ingredientPicture);
  }
}
