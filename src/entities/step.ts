import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Recipe } from "./recipe";

@Entity()
export class Step extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  order!: number;

  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.steps)
  recipe?: Recipe;
}
