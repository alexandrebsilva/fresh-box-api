import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./Recipe";

@Entity()
export class DifficultyLevel extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description?: string;

  @OneToMany(() => Recipe, (Recipe: Recipe) => Recipe.difficultyLevel)
  Recipes?: Recipe[];
}
