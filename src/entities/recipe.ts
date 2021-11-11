import {
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Alergy } from "./alergy";
import { BaseEntity } from "./base-entity";
import { DifficultyLevel } from "./difficulty-level";
import { RecipeAux } from "./recipe-aux";
import { RecipePicture } from "./recipe-picture";
import { Step } from "./step";
import { Tag } from "./tag";

@Entity()
export class Recipe extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  timeToPrepare!: number;

  @ManyToOne(
    () => DifficultyLevel,
    (difficultyLevel: DifficultyLevel) => difficultyLevel.Recipes
  )
  difficultyLevel!: DifficultyLevel;

  @ManyToMany(() => Tag, (tag: Tag) => tag.Recipes, { cascade: true })
  @JoinTable()
  tags?: Tag[];

  @ManyToMany(() => Alergy, (alergy: Alergy) => alergy.Recipes, {
    cascade: true,
  })
  @JoinTable()
  alergies?: Alergy[];

  @OneToMany(
    () => RecipePicture,
    (RecipePicture: RecipePicture) => RecipePicture.recipe,
    { cascade: true }
  )
  pictures?: RecipePicture[];

  @OneToMany(() => Step, (step: Step) => step.recipe, { cascade: true })
  steps?: Step[];

  @OneToMany(() => RecipeAux, (recipeAux: RecipeAux) => recipeAux.recipe, {
    cascade: true,
  })
  recipeAuxs!: RecipeAux[];
}
