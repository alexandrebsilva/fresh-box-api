import { EntityRepository, Repository } from "typeorm";
import { Ingredient } from "../entities/ingredient";

@EntityRepository(Ingredient)
export class IngredientRepository extends Repository<Ingredient> {}
