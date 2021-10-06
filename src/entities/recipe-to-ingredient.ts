import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Ingredient } from "./ingredient";
import { Receipe } from "./receipe";

@Entity()
export class ReceipeToIngredient extends BaseEntity {
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

  @ManyToOne(() => Receipe, (recipe: Receipe) => recipe.recipesToIngredient)
  @JoinColumn()
  recipe!: Ingredient;
}
