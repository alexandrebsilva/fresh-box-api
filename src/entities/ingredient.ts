import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./base-entity";
import { CategoryIngredient } from "./category-ingredient";
import { RecipeToIngredient } from "./recipe-to-ingredient";

@Entity()
export class Ingredient extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(
    () => CategoryIngredient,
    (categoryIngredient: CategoryIngredient) => categoryIngredient.ingredients,
    { cascade: true }
  )
  @JoinColumn()
  category!: CategoryIngredient;

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient: RecipeToIngredient) => recipeToIngredient.ingredient
  )
  recipesToIngredient?: RecipeToIngredient[];
}
