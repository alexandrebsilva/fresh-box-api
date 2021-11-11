import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";
import { UnitOfMeasurement } from "./unit-of-measurement";
@Entity()
export class RecipeAux extends BaseEntity {
  @Column({ nullable: true })
  isIncluded!: boolean;

  @Column({ nullable: true })
  amount!: number;

  @ManyToOne(
    () => Ingredient,
    (ingredient: Ingredient) => ingredient.recipeAuxs,
    { cascade: true }
  )
  @JoinColumn()
  ingredient!: number;

  @ManyToOne(
    () => UnitOfMeasurement,
    (unitOfMeasurement: UnitOfMeasurement) => unitOfMeasurement.recipeAuxs,
    { cascade: true }
  )
  @JoinColumn()
  unitOfMeasurement!: UnitOfMeasurement;

  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.recipeAuxs)
  @JoinColumn()
  recipe!: Recipe;
}
