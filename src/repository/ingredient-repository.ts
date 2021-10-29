import { EntityRepository, Repository } from "typeorm";
import { Ingredient } from "../entities/ingredient";

@EntityRepository(Ingredient)
export class IngredientRepository extends Repository<Ingredient> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async createOne(payload: Ingredient): Promise<void> {
    await this.save(payload);
  }
}
