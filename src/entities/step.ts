import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./Recipe";

@Entity()
export class Step extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  description?: string;

  @ManyToOne(() => Recipe, (Recipe: Recipe) => Recipe.difficultyLevel)
  Recipe?: Recipe;
}
