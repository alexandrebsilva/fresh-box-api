import {
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Alergy } from "./alergy";
import { BaseEntity } from "./base-entity";
import { CategoryIngredient } from "./category-ingredient";
import { DifficultyLevel } from "./difficulty-level";
import { RecipeToIngredient } from "./recipe-to-ingredient";

@Entity()
export class Ingredient extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToMany(
    () => CategoryIngredient,
    (categoryIngredient: CategoryIngredient) => categoryIngredient.ingredients
  )
  @JoinColumn()
  category!: CategoryIngredient;

  @ManyToOne(
    () => DifficultyLevel,
    (difficultyLevel: DifficultyLevel) => difficultyLevel.Recipes
  )
  @JoinColumn()
  difficultyLevel!: DifficultyLevel[];

  @ManyToMany(() => Alergy, (alergy: Alergy) => alergy.Recipes)
  alergies?: Alergy[];

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient: RecipeToIngredient) => recipeToIngredient.ingredient
  )
  recipesToIngredient?: RecipeToIngredient[];
}
