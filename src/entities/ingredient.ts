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
import { Categoryingredient } from "./category-ingredient";
import { DifficultyLevel } from "./difficulty-level";
import { IngredientPicture } from "./ingredient-picture";
import { RecipeToIngredient } from "./recipe-to-ingredient";
import { UnitOfMeasurement } from "./unit-of-measurement";

@Entity()
export class Ingredient extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToMany(
    () => Categoryingredient,
    (categoryingredient: Categoryingredient) => categoryingredient.ingredients
  )
  @JoinColumn()
  category!: Categoryingredient;

  @ManyToOne(
    () => DifficultyLevel,
    (difficultyLevel: DifficultyLevel) => difficultyLevel.Recipes
  )
  @JoinColumn()
  difficultyLevel!: DifficultyLevel[];

  @ManyToMany(
    () => UnitOfMeasurement,
    (unitOfMeasurement: UnitOfMeasurement) => unitOfMeasurement.ingredients
  )
  unitsOfMeasurements?: UnitOfMeasurement[];

  @ManyToMany(() => Alergy, (alergy: Alergy) => alergy.Recipes)
  alergies?: Alergy[];

  @OneToMany(
    () => IngredientPicture,
    (ingredientPicture: IngredientPicture) => ingredientPicture.ingredient
  )
  pictures?: IngredientPicture[];

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient: RecipeToIngredient) => recipeToIngredient.ingredient
  )
  recipesToIngredient?: RecipeToIngredient[];
}
