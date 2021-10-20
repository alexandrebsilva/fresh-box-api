import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";
import { Recipe } from "./Recipe";

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

  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.recipesToIngredient)
  @JoinColumn()
  recipe!: Ingredient;
}
