import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";
import { UnitOfMeasurement } from "./unit-of-measurement";

@Entity()
export class RecipeToIngredient extends BaseEntity {
  @Column()
  isIncluded!: boolean;

  @Column()
  amount!: number;

  @ManyToOne(
    () => Ingredient,
    (ingredient: Ingredient) => ingredient.recipesToIngredient
  )
  @JoinColumn()
  ingredient!: Ingredient;

  @ManyToOne(
    () => UnitOfMeasurement,
    (unitOfMeasurement: UnitOfMeasurement) =>
      unitOfMeasurement.recipeToIngredients
  )
  @JoinColumn()
  unitOfMeasurement!: Ingredient;

  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.recipesToIngredient)
  @JoinColumn()
  recipe!: Ingredient;
}
