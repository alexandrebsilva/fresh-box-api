import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { RecipeToIngredient } from "./recipe-to-ingredient";

@Entity()
export class UnitOfMeasurement extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  abbreviation!: string;

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient: RecipeToIngredient) =>
      recipeToIngredient.unitOfMeasurement
  )
  recipeToIngredients?: RecipeToIngredient[];
}
