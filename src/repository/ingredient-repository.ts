/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getRepository } from "typeorm";
import { Ingredient } from "../entities/ingredient";

export class IngredientRepository {
  async findById(id: number): Promise<Ingredient | undefined> {
    const result = await getRepository(Ingredient).findOne(id);
    return result;
  }

  async findAll(): Promise<Ingredient[]> {
    const result = await getRepository(Ingredient).find();
    return result;
  }

  async create(ingredient: Ingredient): Promise<void> {
    await getRepository(Ingredient).create(ingredient);
  }
}
