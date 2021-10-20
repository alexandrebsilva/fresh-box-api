import { Entity, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Alergy } from "./alergy";
import { BaseEntity } from "./base-entity";
import { DifficultyLevel } from "./difficulty-level";
import { RecipePicture } from "./recipe-picture";
import { RecipeToIngredient } from "./recipe-to-ingredient";
import { Tag } from "./tag";

@Entity()
export class Recipe extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @ManyToOne(
    () => DifficultyLevel,
    (difficultyLevel: DifficultyLevel) => difficultyLevel.Recipes
  )
  difficultyLevel!: DifficultyLevel;

  @ManyToMany(() => Tag, (tag: Tag) => tag.Recipes)
  tags?: Tag[];

  @ManyToMany(() => Alergy, (alergy: Alergy) => alergy.Recipes)
  alergies?: Alergy[];

  @OneToMany(
    () => RecipePicture,
    (RecipePicture: RecipePicture) => RecipePicture.recipe
  )
  pictures?: RecipePicture[];

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient: RecipeToIngredient) => recipeToIngredient.recipe
  )
  recipesToIngredient?: RecipeToIngredient[];
}
